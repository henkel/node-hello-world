const http = require('http');
const port = 8080;

const server = http.createServer(
  (request, response) => {
    console.info(`${request.method} ${request.url}`)
    response.writeHead(200, {
      "Content-Type": "text/plain"
    });
    response.end("Hello, World!\n");
  });

console.info(`Listen on port ${port}`)
server.listen(port);
