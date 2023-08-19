const Notification = require('../../models/notification');

const add = async (req, res) => {
  try {
    const { title, desc, date, time } = req.body;
    const notification = new Notification({ title, desc, date, time });
    await notification.save();

    if (!notification) {
      return res
        .status(400)
        .json({ message: 'Something wrong with the input' });
    }

    res.json({
      message: 'Success add notification',
      data: notification,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  add,
};
