let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
var number = Number(input);
var value = 1;
while (true) {
	number -= value;
	if (number <= 0) {
		number += value;
		break;
	}
	value++;
}
if (value % 2 === 1) {
	console.log(`${value - (number - 1)}/${1 + (number - 1)}`);
} else {
	console.log(`${1 + (number - 1)}/${value - (number - 1)}`);
}