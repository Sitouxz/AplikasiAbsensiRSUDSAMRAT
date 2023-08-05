const express = require('express');
const CtrlAdmin = require('../controllers/admin');
const MiddlewareVerifyToken = require('../middleware/verify-token');

const RouterAdmin = express.Router();

RouterAdmin.post('/login', CtrlAdmin.login);

exports.RouterAdmin = RouterAdmin;
