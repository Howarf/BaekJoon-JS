const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const [count,t] = input.shift().split(" ").map(Number);
let numbox = [];
for(let i = 0; i < count; i++){
    numbox.push(i+1);
}
for(let i = 0; i < t; i++){
    let [a,b,c] = input[i].split(" ").map(Number);
    let box1 = numbox.slice(c-1,b);
    box1 = box1.concat(numbox.slice(a-1,c-1));
    numbox.splice(a-1,b-a+1, ...box1);
}
console.log(numbox.join(" "));