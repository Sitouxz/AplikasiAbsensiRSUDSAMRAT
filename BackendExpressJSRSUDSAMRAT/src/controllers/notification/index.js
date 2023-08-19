const { add } = require('./add');
const { get } = require('./get');
const { getById } = require('./get-by-id');

const ControllerNotification = {
  add,
  get,
  getById,
};

module.exports = ControllerNotification;
