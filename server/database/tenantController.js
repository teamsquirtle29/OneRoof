const db = require('./index.js');

module.exports = {
  sendPayment(req, res, next) {
    const queryString = 'UPDATE payments SET sent = true WHERE apt_id=$1 AND month=$2';
    const values = [req.body.apt_id, req.body.month];
    db.query(queryString, values, (err, result) => {
        if(err){
            return next(err);
        };
        res.locals.result = result;
        return next();
    })    
  },

  getHistory(req, res, next) {
    const queryString = 'SELECT * FROM payments WHERE apt_id = $1';
    const values = [req.body.apt_id];
    db.query(queryString, values, (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result.rows;
      return next();
    })
  }
};