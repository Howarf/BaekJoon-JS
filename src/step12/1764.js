let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
[N, M] = input.shift().split(" ");
const no_listen = new Set(input.slice(0,N));
const no_see = new Set(input.slice(N, N+M));
let answer = [];
if(N < M){
    no_see.forEach(el => {
        if(no_listen.has(el)){
            answer.push(el);
        }
    });
}
else{
    no_listen.forEach(el => {
        if(no_see.has(el)){
            answer.push(el);
        }
    });
}
answer = answer.sort((a,b) => a.localeCompare(b));
console.log(answer.length);
console.log(answer.join("\n"));