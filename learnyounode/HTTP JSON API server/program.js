var http = require("http");
var url = require("url");

var server = http.createSever(function (req, res) {
	if (req.method == "GET") {
		
	}
});

server.listen(Number(process.argv[2]));