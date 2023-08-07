const mongoose = require('mongoose');

const adminScheme = new mongoose.Schema({
  nik: {
    type: String,
    require: true,
    default: '',
  },
  password: {
    type: String,
    require: true,
    default: '',
  },
  access_token: {
    type: String,
    require: true,
    default: '',
  },
});

const Admin = mongoose.model('Admin', adminScheme);

module.exports = Admin;
