const fs = require('fs');
const path = require('path');
const http = require('http');

const port = 3434;
const ip = '127.0.0.1';

const server = http.createServer((req, res) => {
  const filepath = path.resolve(req.url);
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end(`${err}\n`);
    }
    res.end(data);
  });
});

server.listen(port, ip, () => {
  console.log(`Listening on ${ip}:${port}...`);
});
