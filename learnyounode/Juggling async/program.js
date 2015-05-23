http = require("http");
bl = require("bl")

var count = 0;
var v = [undefined, undefined, undefined]

function read(i, callback) {
	http.get(process.argv[i], function (response) {
		response.pipe(bl(function (err, data) {
			if (err)
				return callback(err, null, null)

			callback(err, i - 2, data.toString());
		}));
	});
}

function queue(err, i, data) {
	if (err)
		return console.error(err);

	v[i] = data;
	count ++;

	if (count == 3) {
		for (var i = 0; i < v.length; i++)
			console.log(v[i]);
	}
}

for (var i = 2; i < 5; i++)
	read(i, queue);