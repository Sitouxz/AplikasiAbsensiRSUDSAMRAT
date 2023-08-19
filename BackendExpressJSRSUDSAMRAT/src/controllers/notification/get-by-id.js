const Notification = require('../../models/notification');

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findById(id);

    if (!notification) {
      return res.status(400).json({ message: 'Notification not found' });
    }

    res.json({
      message: 'Success get notification',
      data: notification,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getById,
};
