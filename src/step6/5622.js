const fs = require("fs");
let input;
let result=0;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('');
}
let phone = {
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ",
};
for (let i = 0; i < input.length; i++) {
	for (let j = 2; j <= 9; j++) {
		if (phone[j].includes(input[i])) {
			result += j + 1;
			break;
		}
	}
}
console.log(result);