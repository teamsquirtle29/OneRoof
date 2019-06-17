const express = require('express');
const managerController = require('./database/managerController.js');
const tenantController = require('./database/tenantController.js');

const paymentRouter = express.Router();

//manager routes
paymentRouter.post('/', managerController.postPayment, (req, res) => {
  res.json({'msg': 'payments successfully created'});
});

paymentRouter.put('/', managerController.putPayment, (req, res) => {
    res.status(200).json({'msg': 'payment updated to received'});
});

paymentRouter.get('/overdue', managerController.getOverdue, (req, res) =>{ 
    res.status(200).json(res.locals.result);
});

paymentRouter.get('/paid', managerController.getCompletedPayments, (req, res) => {
  res.status(200).json(res.locals.result);
})

paymentRouter.get('/current', managerController.getCurrent, (req, res) => {
    res.status(200).json(res.locals.result);
});

paymentRouter.put('/send', tenantController.sendPayment, (req, res) => {
    res.status(200).json({'msg':'payment sent'});
})

paymentRouter.get('/history', tenantController.getHistory, (req, res) => {
  res.status(200).json(res.locals.result);
})

module.exports = paymentRouter;