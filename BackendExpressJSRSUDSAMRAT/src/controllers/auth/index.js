const { login } = require('./login');
const { register } = require('./register');

const ControllerAuth = {
  login,
  register,
};

module.exports = ControllerAuth;
