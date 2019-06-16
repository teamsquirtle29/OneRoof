const db = require('./index.js');

module.exports = {
  // go back and change to include other info like apartment address
  getAllUsers(req, res, next) {
    const queryString = 'SELECT * FROM users JOIN apartments ON users.apt_id = apartments._id';
    db.query(queryString, (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result.rows;
      return next();
    });
  },

  getAllApartments(req, res, next) {
    const queryString = 'SELECT * FROM apartments';
    db.query(queryString, (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result.rows;
      return next();
    });
  },

  deleteEvent(req, res, next) {
    const queryString = 'DELETE FROM events WHERE _id = $1'
    const values = [req.body.id];
    db.query(queryString, values, (err, result) => {
      if (err) {
        return next(err);
      }
      return next();
    });
  },

  postPayment(req, res, next) {
    const queryString = `SELECT DISTINCT apt_id FROM users WHERE role = 'resident'`;
    db.query(queryString, (err, result) => {
      if (err) {
        return err;
      }
      const promiseArray = [];
      const date = new Date(Date.now());
      const month = date.getMonth() + 1;
      const queryString2 = 'INSERT INTO payments (apt_id, sent, received, month) VALUES ($1, false, false, $2)';
      result.rows.forEach(apartment => {
        const values = [apartment.apt_id, month];
        promiseArray.push(new Promise((resolve, reject) => {
          db.query(queryString2, values, (err, result) => {
            if (err) {
              return reject(err);
            }
            resolve(result);
          })
        }));
      });
      Promise.all(promiseArray)
        .then(res => next())
        .catch(err => next(err));
    });
  },
  
  putPayment(req, res, next){
    const queryString = 'UPDATE payments SET received = true WHERE  apt_id = $1 AND month = $2';
    const values = [req.body.apt_id, req.body.month];
    db.query(queryString, values, (err, result) => {
      if(err) return next(err);
      res.locals.result = result.rows;
      return next();
    })
  },
  
  getOverdue(req, res, next){
    const queryString = 'SELECT * FROM payments WHERE received = false';
    db.query(queryString, (err, result) => {
      if(err) return next(err);
      res.locals.result = result.rows;
      return next();
    })
  },

  getCurrent(req, res, next) {
    const date = new Date(Date.now());
    const month = date.getMonth();
    const queryString = 'SELECT * FROM payments WHERE month = $1';
    const values = [month];
    db.query(queryString, values, (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result.rows;
      return next();
    })
  }
};