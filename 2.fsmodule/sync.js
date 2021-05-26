const fs =require("fs");
fs.writeFileSync("sync.txt","node module 2 learn");
const readdata = fs.readFileSync("sync.txt");
const readdatafstr = fs.readFileSync("sync.txt","utf-8");
console.log(readdata);
console.log(readdatafstr);