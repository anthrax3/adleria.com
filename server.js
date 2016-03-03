var staticServer = require('node-static');
var path = require('path');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new staticServer.Server(path.join(__dirname, 'build', 'home'));

require('http').createServer(function (req, res) {
    req.addListener('end', function () {
        //
        // Serve files!
        //
        console.log(req.url);
        file.serve(req, res);
    }).resume();
}).listen(8080);

console.log("listening port 8080");