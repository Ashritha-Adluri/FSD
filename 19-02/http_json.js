const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api/data' && req.method === 'GET') {
    const data = {
      name: "Ashritha",
      age: 19,
      college: "CVR"
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
