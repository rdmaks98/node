(function () {
    const fs = require("fs");
    const data = fs.readFileSync("../4.pathmodule/path.js");
    console.log(data);
})();