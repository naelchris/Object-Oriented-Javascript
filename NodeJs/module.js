// var module = require('module_name'); //loading module in node

//core module in nodejs
//http -> http module include classes, event, method to create nodejs http server
//url -> url resolution and parsing
//querystring -> deal with query string
//path -> deal with file path
//fs -> classes, method, events to worik with I/O
//util -> util function for programmer


var http = require('http');

var server = http.createServer(function(req, res){
    //write code here
})

server.listen(5000);