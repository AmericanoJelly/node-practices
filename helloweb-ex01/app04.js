var connect = require('connect');
var serveStatic = require('serve-static');
var connectRoute = require('connect-route');

var port = 9090;
var app = connect();

app.use(connectRoute(function(router){
    router.get("/", function(req, resp){

    });
    router.get("/user", function(req, resp){

    });
}));

app.use(serveStatic(__dirname + "/public"))
app.listen(port, function(){
    console.log("http server running on "+port);
});