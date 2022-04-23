const fs = require("fs");
let input,data=[];
let result="";
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
for(let i=0;i<Number(input[0]);i++){
    data = input[i+1].split(" ");
    for(let j=0;j<data[1].length;j++){
        result += data[1][j].repeat(data[0]);
    }
    result += "\n"
}
console.log(result);