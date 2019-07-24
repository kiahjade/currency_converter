const Express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const converter = require('./converter');

const app = new Express();
app.use(bodyParser.json({ limit: '1mb' }));

app.post('/convert', (req, res) => {
  res.json({
    result: converter(req.body.amount)
  });
});

const server = new http.Server(app);

const LISTEN_PORT = 8080;

server.listen(
  LISTEN_PORT, err => {
    if (err) {
      throw err;
    }
    console.log(
      `==> ✅  Express Service is running on ${LISTEN_PORT}`
    );
  }
);
