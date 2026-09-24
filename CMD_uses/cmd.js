const http = require('http');
const server = http.createServer((req,res)=>{
    res.write('TESTING INPUT FROM CMD')
    res.end(" bye")

})

const arg = process.argv;
// console.log("===========",arg);
const port = (arg[2])
// console.log("===========",arg[2]);

server.listen(port);