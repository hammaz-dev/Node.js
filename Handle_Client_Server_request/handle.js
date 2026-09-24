const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
    //   console.log(req.url);
  //   console.log(req.headers);

  console.log("Host:", req.headers.host);
  console.log("Method:", req.method);
  console.log("URL:", req.url);

  // Route matching based on req.url
  if (req.url === "/") {
    res.write("<h1>Home Page</h1>");
  } else if (req.url === "/login") {
    res.write("<h1>Login Page</h1>");
  } else if (req.url === "/about") {
    res.write("<h1>About Page</h1>");
  } else {
    res.write("<h1>404 Page Not Found</h1>");
  }

  res.end(); // Closes the HTTP response stream properly
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
