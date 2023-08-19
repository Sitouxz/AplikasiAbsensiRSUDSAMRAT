const Notification = require('../../models/notification');

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findByIdAndDelete(id);

    if (!notification) {
      return res.status(400).json({ message: 'Notification not found' });
    }

    res.json({
      message: 'Success delete notification',
      data: notification,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  deleteById,
};
