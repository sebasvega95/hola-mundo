var fs = require("fs");

fs.readFile(process.argv[2], function(err, data) {
	if (err)
		return console.error(err);

	var d = data.toString().split("\n");
	console.log(d.length - 1);
});