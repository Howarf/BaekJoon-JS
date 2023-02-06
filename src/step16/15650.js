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
let visited = new Array(n).fill(false);
dfs(0,0);
function dfs(count , index){
    if(count === r) {
        result += `${output.join(" ")}\n`;
        return;
    }
    for(let i = index; i < n; i++){
        if(visited[i] === true){
            continue;
        }
        visited[i] = true;
        output.push(i+1);
        dfs(count+1, i);
        output.pop();
        visited[i] = false;
    }
}
console.log(result);