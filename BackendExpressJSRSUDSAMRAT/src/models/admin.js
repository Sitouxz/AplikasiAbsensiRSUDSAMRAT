const mongoose = require('mongoose');

const adminScheme = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Admin = mongoose.model('Admin', adminScheme);

module.exports = Admin;
