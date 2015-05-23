var net = require("net");
var strftime = require("strftime")
// "YYYY-MM-DD hh:mm"
var server = net.createServer(function (socket) {
	var date = new Date(Date.now())
	socket.write( strftime("%Y-%m-%d %k:%M\n", date) );
	socket.end();
});

server.listen(process.argv[2]);