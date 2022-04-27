const fs = require("fs");
let input;
let result=[];
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(' ');
}
for(let i=0;i<input.length;i++){
    let a = ""
    for(let j=2;0<=j;j--){
        a += input[i][j];
    }
    result.push(a);
}
console.log(Math.max.apply(null,result));