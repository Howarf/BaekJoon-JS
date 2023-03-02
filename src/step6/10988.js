const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("");
}
let revers = Array.from(input);
revers.reverse();
let awnser = 1;
for(let i = 0; i < input.length; i++){
    if(input[i] === revers[i]){
        continue;
    }
    else{
        awnser = 0;
    }
}
console.log(awnser);