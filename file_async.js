// var fs = require('fs');

// make file
// fs.writeFile("file_async.txt","create file for async data and make file",
// (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done");
//     }
// });

// read file
// fs.readFile("file_async.txt","utf8", (data,err) => {
//     if(err){
//         console.log(err);
//     }
//     else
//     {
//         console.log(data);
//     }
// });

// append file
// fs.appendFile("file_async.txt","i am append the data in this file",
//     (err) => {
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("aeppend");
//         }
//     })

// delete file
// fs.unlink("file_async.txt",(err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("hidden");
//     }
// })