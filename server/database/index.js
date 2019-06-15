const { Pool } = require('pg')
let url = 'postgres://qjfbqnie:1ZZ5p3UdKfV-Z31hgTCWSs28dnijXFDW@raja.db.elephantsql.com:5432/qjfbqnie'
const pool = new Pool({
    connectionString: url,
  });

  // creating table of residents
  pool.query('CREATE TABLE IF NOT EXISTS users (_id SERIAL PRIMARY KEY, name VARCHAR, apt_id INTEGER, role VARCHAR, pwd VARCHAR)', (err, result)=>{
      if(err) throw err;
  });

  //creating table of payment history
  pool.query('CREATE TABLE IF NOT EXISTS payments (_id SERIAL PRIMARY KEY, apt_id INTEGER, sent BOOLEAN, received BOOLEAN, month INTEGER)', (err, result)=>{
    if(err) throw err;
});

//creating table of messages
  pool.query('CREATE TABLE IF NOT EXISTS messages (_id SERIAL PRIMARY KEY, text VARCHAR, user1_id INTEGER, user2_id INTEGER, timestamp TIMESTAMP)', (err, result)=>{
    if(err) throw err;
});

//creating table of apartments
pool.query('CREATE TABLE IF NOT EXISTS apartments (_id SERIAL PRIMARY KEY, address INTEGER, rent INTEGER)', (err, result)=>{
    if(err) throw err;
});

//creating table of maintenance requests --> STRECH FEATURE S2
pool.query('CREATE TABLE IF NOT EXISTS maintenance (_id SERIAL PRIMARY KEY, apt_id INTEGER, description VARCHAR, status VARCHAR, user_id INTEGER)', (err, result)=>{
    if(err) throw err;
});

//exporting query function for server requests
  module.exports = {query: (text, params, callback)=>{
      return pool.query(text, params, callback)
  }};