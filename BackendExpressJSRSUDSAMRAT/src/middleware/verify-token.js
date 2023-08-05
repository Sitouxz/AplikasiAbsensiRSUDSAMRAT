const express = require('express');
const ModuleJWT = require('../modules/jwt');

const MiddlewareVerifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  const parsedToken = ModuleJWT.verify(token);

  try {
    if (!parsedToken.valid) {
      throw new Error(getLang('AUTH_TOKEN_INVALID'));
    }
    next();
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message,
    });
  }
};

module.exports = MiddlewareVerifyToken;
