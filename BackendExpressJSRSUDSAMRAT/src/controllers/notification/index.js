const { add } = require('./add');
const { get } = require('./get');
const { getById } = require('./get-by-id');
const { deleteById } = require('./delete');

const ControllerNotification = {
  add,
  get,
  getById,
  deleteById,
};

module.exports = ControllerNotification;
