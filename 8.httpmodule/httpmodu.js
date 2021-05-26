const http = require("http");
const port = 3902;
const server = http.createServer((req,res) =>{
    if(req.url == "/" || req.url == "/home")
    {
        res.end("<h2>Welcome to the demo<h2>");
    }
    else if(req.url == "/contact")
    {
        res.end("cotact page");
    }
    else if(req.url == "/category")
    {
        res.end("category page");
    }
    else
    {
        res.writeHead(404, {"content-type" : "html/json"});
        res.end("this page is not avilabel please try agin ");
    }
});

server.listen(port, "127.0.0.1", () => {
    console.log("server connect");
})