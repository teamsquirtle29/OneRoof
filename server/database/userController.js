const db = require('./index.js');

module.exports = {
  postUser(req, res, next){
    const queryString = 'INSERT INTO users (pwd, name, apt_id, role) VALUES ($1, $2, $3, $4)';
    console.log(req.body);
    const values = [req.body.pwd, req.body.name, req.body['apt_id'], req.body.role];
    db.query(queryString, values, (err)=>{
        if(err) return next(err);
        return next();
    })
  },

  getUser(req, res, next){
    const queryString = 'SELECT * FROM users WHERE name = $1 AND pwd = $2';
    const values = [req.headers.name, req.headers.pwd];
    db.query(queryString, values, (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result;
      return next();
    });
  }
};