const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("hey this is response page ");
  const age = 56;
  res.write(`
    <html>
    <head>
    <title>response page</title>
    </head>
    <body>
      <h1>This is written under node js using res.write</h1>
      <h1>${age}</h1>
      <h1>${new Date}</h1>
    </body>
    </html>
  `);
  res.end();
//   process.exit()// used to exit after reqeust done it will stop server after request.
});

server.listen(6000);