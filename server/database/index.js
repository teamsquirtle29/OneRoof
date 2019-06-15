const { Pool } = require('pg')
let url = 'postgres://qjfbqnie:1ZZ5p3UdKfV-Z31hgTCWSs28dnijXFDW@raja.db.elephantsql.com:5432/qjfbqnie'
const pool = new Pool({
    connectionString: url,
  });

  // creating table of residents
  pool.query(`CREATE TABLE IF NOT EXISTS users (
      _id SERIAL PRIMARY NUMBER,
      name VARCHAR,
      apt_id INTEGER,
      role VARCHAR)`, (err, result)=>{
      if(err) throw err;
      console.log(result);
  });

  //creating table of payment history
  pool.query(`CREATE TABLE IF NOT EXISTS payments (
    _id SERIAL PRIMARY NUMBER,
    name VARCHAR,
    apt_id INTEGER,
    role VARCHAR)`, (err, result)=>{
    if(err) throw err;
    console.log(result);
});

//exporting query function for server requests
  module.exports = {query: (text, params, callback)=>{
      return pool.query(text, params, callback)
  }};