import http from 'http';

// First Server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.write('<h1>Hello this is node js</h1>');
    res.end("Hello");
}).listen(4800);

// Second Server (Fixed parameter order)
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Hey this is me ");
    res.end("bye");
}).listen(3000);
