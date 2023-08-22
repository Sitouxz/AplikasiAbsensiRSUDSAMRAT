const mongoose = require('mongoose');
const Config = require('../config/config');

class ModuleDatabase {
  static async connect() {
    return new Promise((res, rej) => {
      mongoose.set('strictQuery', false);
      mongoose
        .connect(Config.DATABASE_URL)
        .then(() => res())
        .catch((err) =>
          rej(`Gagal terhubung ke basis data: ${Config.DATABASE_URL}`)
        );
    });
  }
}

module.exports = ModuleDatabase;
