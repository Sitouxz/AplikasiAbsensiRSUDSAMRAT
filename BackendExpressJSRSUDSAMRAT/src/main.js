const express = require('express');
const http = require('http');
const ModuleDatabase = require('./modules/database');
const path = require('path');
const Config = require('./config/config');
const MiddlewareVerifyToken = require('./middleware/verify-token');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const RouterApi = express.Router();
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());

app.disable('x-powered-by');
app.use(express.urlencoded({ limit: '30000kb', extended: true }));
app.use(express.json({ limit: '30000kb' }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

app.use('/api', [], RouterApi);

(async () => {
  try {
    await ModuleDatabase.connect()
      .then(() => {
        console.log('[server_ok] Terhubung ke basis data');
      })
      .catch((err) => {
        console.log('[server_error] Gagal terhubung ke basis data');
      });

    RouterApi.get('/', (req, res) => {
      res.send('Halo Dunia');
    });

    RouterApi.get('/ping', MiddlewareVerifyToken, (req, res) => {
      res.send('pong');
    });

    RouterApi.use('/auth', require('./routes/auth').RouterAdmin);
    RouterApi.use(
      '/notification',
      require('./routes/notification').RouterNotification
    );

    // //Allow this code bellow if you want to use middleware verify token
    // RouterApi.use(
    //   '/notification',
    //   MiddlewareVerifyToken,
    //   require('./routes/notification').RouterNotification
    // );

    io.on('connection', (socket) => {
      console.log(`user connected : ${socket.id}`);
      socket.on('message', (data) => {
        console.log(
          'message: ' +
            data.title +
            ' ' +
            data.desc +
            ' ' +
            data.date +
            ' ' +
            data.time
        );
        socket.broadcast.emit('recieve_message', data);
      });
      socket.on('disconnect', () => {
        console.log(`user disconnected: ${socket.id}`);
      });
    });

    server.listen(Config.HTTP_PORT, () => {
      console.log(`[server_ok] Server berjalan di port ${Config.HTTP_PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
})();
