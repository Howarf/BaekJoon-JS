let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
let count = 665;

while (input > 0) {
    count++;

  if (count.toString().includes('666')) {
    input--;
  }
}

console.log(count);