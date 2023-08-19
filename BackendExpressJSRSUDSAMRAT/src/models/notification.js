const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      default: '',
    },
    desc: {
      type: String,
      require: true,
      default: '',
    },
    date: {
      type: String,
      require: true,
      default: '',
    },
    time: {
      type: String,
      require: true,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
