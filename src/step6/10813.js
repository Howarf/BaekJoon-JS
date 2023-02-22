const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const [count,t] = input.shift().split(" ").map(Number);
let box = [];
for(let i = 0; i < count; i++){
    box.push(i+1);
}
for(let i = 0; i < t; i++){
    let [a,b] = input[i].split(" ");
    let num = box[a-1];
    box[a-1] = box[b-1];
    box[b-1] = num;
}
console.log(box.join(" "));