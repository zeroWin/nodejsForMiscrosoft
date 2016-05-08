// JavaScript Document\
var http = require("http");
var url = require("url");

http.createServer(function(req,res) {
        var urlobj = url.parse(req.url,true);
		console.log(urlobj);
        var paths = [[parseInt(urlobj.query.id1),parseInt(urlobj.query.id2)]];
		console.log(paths);
        res.end(JSON.stringify(paths));
}).listen(8080);
