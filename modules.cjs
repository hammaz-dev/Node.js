import fs from 'fs';

fs.writeFileSync("dummy.txt","trying with modules ")


import os from 'os';
const {log} = require('console')

console.log(os.platform())
console.log(os.hostname());
console.log(os.cpus())
console.log(process.cwd())
// console.log(process.pid())

log("hammaz")

