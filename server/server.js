const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('./database/userController.js');

app.use(bodyParser.json());

app.post('/user', userController.postUser, (req, res) => {
  res.json({'msg': 'successfully posted to database'});
});

app.get('/user', userController.getUser, (req, res) => {
  res.json(res.locals.result);
});

//create user has to save password, name, role and apartment id

app.listen(3000);