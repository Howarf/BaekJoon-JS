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
for(let i = 1; i <= count; i++){
    box.push(i);
}
for(let i = 0; i < t; i++){
    let [a,b] = input[i].split(" ");
    let clon = [];
    for(let j = a-1; j < b; j++){
        clon.push(box[j]);
    }
    clon.reverse();
    box.splice(a-1, b-a+1, ...clon);
}
console.log(box.join(" "));