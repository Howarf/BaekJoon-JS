let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
[n, m] = input.shift().split(" ");
const arr = input.slice(0,n);
const poketmonList = new Map(arr.map((v, i) => [v , i+1]))
const question = input.slice(n);
let answer = [];
question.forEach((el)=>{
    if(Number.isNaN(+el)){
        answer.push(poketmonList.get(el));
    }
    else{
        answer.push(arr[el-1]);
    }
})
console.log(answer.join("\n").trim());