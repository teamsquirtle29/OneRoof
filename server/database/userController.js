const db = require('./index.js');

module.exports = {
  postUser(req, res, next) {
    const queryString = 'INSERT INTO users (pwd, name, apt_id, role) VALUES ($1, $2, $3, $4)';
    console.log(req.body);
    const values = [req.body.pwd, req.body.name, req.body['apt_id'], req.body.role];
    db.query(queryString, values, (err)=>{
        if(err) return next(err);
        return next();
    })
  },

  getUser(req, res, next) {
    const queryString = 'SELECT * FROM users WHERE name = $1 AND pwd = $2';
    const values = [req.headers.name, req.headers.pwd];
    db.query(queryString, values, (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result.rows;
      return next();
    });
  },

  postEvent(req, res, next) {
    console.log(req.body);
    const queryString = 'INSERT INTO events (date, description, type, resident_id) VALUES ($1, $2, $3, $4)';
    const values = [req.body.date, req.body.description, req.body.type, req.body.resident_id];
    db.query(queryString, values, (err, result) => {
      if (err) {
        return next(err);
      }
      return next();
    });
  },

  getEvent(req, res, next){
    let queryString = '';
    let values = [];
    if(req.headers.role === 'management') {
      queryString = 'SELECT * FROM events WHERE date >= NOW()';
    } else {
      queryString = 'SELECT * FROM events WHERE date >= NOW() AND (resident_id IS NULL OR resident_id = $1)';
      values = [req.headers.user_id];
    }
    db.query(queryString, values, (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result.rows;
      return next();
    })
  },

  getMessages(req, res, next) {
    let queryString = 'SELECT * FROM messages WHERE (sender_id = $1 AND receiver_id = $2) OR (sender_id = $2 AND receiver_id = $1)';
    let values = [req.body.sender_id, req.body.receiver_id];
    db.query(queryString, values, (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result.rows;
      return next();
    })
  },

  postMessages(req, res, next) {
    let queryString = 'INSERT INTO messages (text, sender_id, receiver_id, timestamp) VALUES ($1, $2, $3, $4) RETURNING *';
    let values = [req.body.text, req.body.sender_id, req.body.receiver_id, req.body.timestamp];
    db.query(queryString, values, (err, result) => {
      if(err){
        return err;
      };
      res.locals.result = result.rows;
      return next();
    });
  },
};