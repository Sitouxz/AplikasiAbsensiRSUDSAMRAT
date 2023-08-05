const jwt = require('jsonwebtoken');
const Config = require('../config/config');

class ModuleJWT {
  static sign(body) {
    try {
      return jwt.sign(body, Config.SERVER_TOKEN_SECRET, { expiresIn: '1h' });
    } catch (ignore) {
      return '';
    }
  }

  static verify(token) {
    try {
      return jwt.verify(token, Config.SERVER_TOKEN_SECRET);
    } catch (ignore) {
      return '';
    }
  }
}

module.exports = ModuleJWT;
