let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const t = input.shift();
let newChat = new Set();
let count = 0;
for(let i = 0; i < t; i++){
    if(input[i] === "ENTER"){
        count += newChat.size;
        newChat.clear();
    }
    else{
        newChat.add(input[i]);
    }
}
count += newChat.size;
console.log(count);