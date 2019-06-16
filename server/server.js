const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./database/userController.js');
const managerController = require('./database/managerController.js');
const residentController = require('./database/residentController.js');
const maintenanceController = require('./database/maintenanceController.js');
const paymentRouter = require('./paymentRouter.js');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/client')));

// routes for multiple user types
app.post('/user', userController.postUser, (req, res) => {
  res.status(200).json({'msg': 'successfully posted to database'});
});

app.get('/user', userController.getUser, (req, res) => {
  res.status(200).json(res.locals.result);
});

app.post('/event', userController.postEvent, (req, res) => {
  res.status(200).json({'msg': 'successfully posted to database'});
});

app.get('/event', userController.getEvent, (req,res)=>{
  res.status(200).json(res.locals.result);
});

app.delete('/event', managerController.deleteEvent, (req, res) => {
  res.status(200).json({'msg': 'event successfully deleted'});
});

// get message
app.get('/messages', userController.getMessages, (req, res) => {
  res.status(200).json(res.locals.result);
})
// post message
app.post('/messages', userController.postMessages, (req, res)=>{
  res.status(200).json(res.locals.result);
})

app.get('/allUsers', managerController.getAllUsers, (req, res) => {
  res.status(200).json(res.locals.result);
});

app.get('/allApartments', managerController.getAllApartments, (req, res) => {
  res.status(200).json(res.locals.result);
});

app.use('/payments', paymentRouter);

//error handling
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) =>{
  res.status(400).json({'msg':err});
})

app.listen(3000);