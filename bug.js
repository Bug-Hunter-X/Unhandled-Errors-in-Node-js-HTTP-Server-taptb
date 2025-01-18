const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request
  console.log('Request received!');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Error handling missing