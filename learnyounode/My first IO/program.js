var fs = require("fs");

var buff = fs.readFileSync(process.argv[2]);
var str = buff.toString();

var v = str.split("\n")

console.log(v.length - 1);