const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle the request
    console.log('Request received!');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
  } catch (err) {
    console.error('Error handling request:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});