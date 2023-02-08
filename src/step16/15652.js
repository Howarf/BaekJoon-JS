const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
const [n,r] = (input.shift()).split(" ").map(Number);
let output = [];
let result = "";
dfs(0, 0);
function dfs(idx, count){
    if(count === r) {
        result += `${output.join(" ")}\n`;
        return;
    }
    for(let i = idx; i < n; i++){
        output.push(i+1);
        dfs(i, count+1);
        output.pop();
    }
}
console.log(result);