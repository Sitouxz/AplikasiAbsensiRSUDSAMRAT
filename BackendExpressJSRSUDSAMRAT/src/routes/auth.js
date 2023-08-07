const express = require('express');
const CtrlAdmin = require('../controllers/auth/index');
const MiddlewareVerifyToken = require('../middleware/verify-token');

const RouterAdmin = express.Router();

RouterAdmin.post('/login', CtrlAdmin.login);
RouterAdmin.post('/register', CtrlAdmin.register);

exports.RouterAdmin = RouterAdmin;
