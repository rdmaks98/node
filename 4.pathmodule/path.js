const path = require("path");
const fileurl = "D:/Me/new language/node/basicnode/4.pathmodule/path.js";
const newpath = "D:abc/path.js";

console.log(`Directiory name:, ${path.dirname(fileurl)}`);
console.log(`base name:, ${path.basename(fileurl)}`);
console.log(`Extension name:, ${path.extname(fileurl)}`);
console.log(`Normalize:, ${path.normalize(fileurl)}`);
console.log(`Delimeter:, ${path.delimiter}`);
console.log(`Absolute:, ${path.isAbsolute(newpath)}`);
console.log(`Path  parse:, ${path.parse(fileurl)}`);
console.log("path parse" + path.parse(fileurl));

var pathobj = path.parse(fileurl);
console.log("formate path",path.format(pathobj));