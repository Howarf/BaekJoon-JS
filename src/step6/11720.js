const fs = require("fs");
let input,data=0;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
for(let i=0;i<Number(input[0]);i++){
    data += Number(input[1][i]);
}
console.log(data);