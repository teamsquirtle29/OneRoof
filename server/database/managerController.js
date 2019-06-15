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

  deleteEvent(req, res, next) {
    const queryString = 'DELETE FROM events WHERE _id = $1'
    const values = [req.body.id];
    db.query(queryString, values, (err, result) => {
      if (err) {
        return next(err);
      }
      return next();
    });
  }
};