const os = require("os");

const f1 = console.log(" my os is 32bit or 64bit?    " + os.arch());
const f2 = console.log(" Free Memory:  " + os.freemem() / 1024 / 1024 / 1024);
const f3 = console.log(" Total Memory:  " + os.totalmem() / 1024 / 1024 / 1024);
const f4 = console.log(" Host Name:  " + os.hostname());
const f5 = console.log(" Plateform:  " + os.platform());
const f6 = console.log(" Type:  " + os.type());
const f7 = console.log(" Home Directory:  " + os.homedir());
const f8 = console.log(" Temp Directory:  " + os.tmpdir());
const f9 = console.log(" endianness:  " + os.endianness());
const f10 = console.log(" load avg:  " + os.loadavg());
const f11 = console.log(" Release Date:  " + os.release());
const f12 = console.log(" Uptime:  " + os.uptime());
// console.log(" CPUs:  " + os.cpus());
// console.log(" NetworkInterface:  " + os.networkInterfaces());
const cpus = os.cpus();
const f13 = console.log(JSON.stringify(cpus));
const ni = os.networkInterfaces();
const f14 = console.log(JSON.stringify(ni));

const fs = require("fs");
fs.writeFileSync("od_details.txt","os details");

// fs.appendFileSync("os_details.txt",f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14);