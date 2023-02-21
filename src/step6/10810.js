const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const [count,t] = input.shift().split(" ").map(Number);
let box = new Array(count).fill(0);
for(let i = 0; i < t; i++){
    let [a,b,num] = input[i].split(" ").map(Number);
    changeBall(a-1,b-1,num);
}
function changeBall(a,b,num){
    for(a; a <= b; a++){
        box[a] = num;
    }
}
console.log(box.join(" "));