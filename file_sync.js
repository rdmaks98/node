console.log("file operation");
import { mkdirSync, writeFileSync, readFileSync, unlinkSync, renameSync, appendFileSync, rmdirSync } from "fs";
// make folder
mkdirSync("newBasic");

// write file
writeFileSync("rinkal.txt","hello , i am rinkal and today we are learning node.");

// read file
var read = readFileSync("rinkal.txt");
console.log(read.toString());

// remove file
unlinkSync("rinkal.txt");

// rename file
renameSync("rinkal.txt","rdmakvana.txt");

// append file.
appendFileSync("rinkal.txt","   this is basic operation and i can performing.");

// remove the directory using filesystem
rmdirSync("newBasic");
