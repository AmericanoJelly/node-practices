var http = require('http');

var port = 9090;
var server = http.createServer(function(req, resp){
    resp.writeHead(200, {
        'Content-Type': 'text/html'
    });
    resp.end('<h1>YUUUUUUUUUUUUUJINNNNNNNNNNNNNNNN</h1>')
});
server.listen(9090, function(){
    console.log("http server running on" + port);
});