var staticServer = require('node-static');
var path = require('path');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new staticServer.Server(path.join(__dirname, 'build', 'home'));

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);

console.log("listening port 8080");