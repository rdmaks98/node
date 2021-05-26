const fs = require("fs");
const data = {
    name :"rinky",
    age : 22,
    salary : 40020,
};

// const json = JSON.stringify(data);
// console.log(json);
// fs.appendFile("info.json",json,(err,data) => {
//     if(err)
//     {
//         console.log("data insert");
//     }
// });

const file = fs.readFile("info.json",(err,somedata) => {
    const a = JSON.parse(somedata);
    console.log(a);
    console.log(err);
});