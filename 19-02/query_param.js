const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const name = queryObject.name || 'Guest';
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello, ${name}!`);
});
server.listen(5000, () => {
  console.log('Server running at http://localhost:5000/');
});
