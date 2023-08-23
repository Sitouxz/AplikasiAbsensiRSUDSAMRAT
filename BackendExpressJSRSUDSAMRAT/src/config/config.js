require('dotenv').config();

class Config {
  static DATABASE_URL = `mongodb://localhost:27017/Absensi`;
  static HOSTNAME = `${process.env.HOSTNAME}`;
  static HTTP_PORT = `${process.env.HTTP_PORT || 9595}`;

  static SERVER_TOKEN_SECRET = `${[process.env.SERVER_TOKEN_SECRET]}`;
}

module.exports = Config;
