const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
const N = Number(input);
const row = new Array(N).fill(0);
let count = 0;
function pasibleCheck(line){
    for(let i = 0; i < line; i++){
        if(row[line] === row[i]) return false
        if(Math.abs(row[line] - row[i]) === line - i) return false
    }
    return true;
}
function dfs(line){
    if(line === N){
        count++;
    }
    for(let i = 0; i < N; i++){
        row[line] = i;
        if(pasibleCheck(line)){
            dfs(line+1);
        }
    }
}
dfs(0);
console.log(count);