const Notification = require('../../models/notification');

async function get(req, res) {
  try {
    const notification = await Notification.find();

    if (!notification) {
      return res.status(400).json({ message: 'Notification empty' });
    }

    res.json({
      message: 'Success get notification',
      data: notification,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { get };
