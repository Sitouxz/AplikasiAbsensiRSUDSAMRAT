const express = require('express');
const ControllerNotification = require('../controllers/notification/index');

const RouterNotification = express.Router();

RouterNotification.get('/', ControllerNotification.get);
RouterNotification.get('/:id', ControllerNotification.getById);
RouterNotification.post('/', ControllerNotification.add);
RouterNotification.delete('/:id', ControllerNotification.deleteById);

exports.RouterNotification = RouterNotification;
