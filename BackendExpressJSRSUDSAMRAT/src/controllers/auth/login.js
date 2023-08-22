const Admin = require('../../models/admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Config = require('../../config/config');
const ModuleJWT = require('../../modules/jwt');

login = async (req, res) => {
  try {
    const { nik, password } = req.body;
    const admin = await Admin.findOne({ nik });
    if (!admin) {
      return res.status(400).json({ message: 'User admin does not exist' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Wrong Password' });
    }

    console.log('Login berhasil');

    const token = ModuleJWT.sign({ id: admin._id });

    await Admin.updateOne({ _id: admin._id }, { access_token: token });

    const data = {
      _id: admin._id,
      nik: admin.nik,
      access_token: token,
    };

    res.status(201).json({ data, message: 'Login berhasil' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { login };
