const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "application/json" });
  const userData = [
    {
      name: "hammaz",
      age: "20",
      email: "mohd.ashad200881@gmail.com",
    },

    {
      name: "ashad",
      age: "23",
      email: "mohd.ash1@gmail.com",
    },

    {
      name: "who",
      age: "25",
      email: "ashad@text.com",
    },

    {
      name: "how",
      age: "24",
      email: "mohd@text.com",
    },
  ]; // as this is object in arry so it called array of objects.
  res.write("Started APi");
  res.write(JSON.stringify(userData));

  res.end("end");
});
server.listen(4800); //In Node.js, HTTP headers are key-value pairs sent alongside an HTTP request or response. They act as metadata that provides essential context about the data being transferred, the client making the request, or the server
