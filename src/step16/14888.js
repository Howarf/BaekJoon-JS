const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
const t = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number);
const operObj = {
    0: (oper1, oper2) => oper1 + oper2,
    1: (oper1, oper2) => oper1 - oper2,
    2: (oper1, oper2) => oper1 * oper2,
    3: (oper1, oper2) => {
        if(oper1 < 0){
            return -Math.floor(-oper1 / oper2);
        }
        return Math.floor(oper1 / oper2);
    }
}
const temp = [];
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
function dfs(count){
    if(count === t - 1){
        let oper1 = nums[0];
        for(let i = 0; i < temp.length; i++){
            let oper2 = nums[i+1];
            let idx = temp[i];
            oper1 = operObj[idx](oper1,oper2);
        }
        if(oper1 > max) max = oper1;
        if(oper1 < min) min = oper1;
    }
    for(let i = 0; i < 4; i++){
        if(!operators[i]) continue;
        operators[i] -= 1;
        temp.push(i);
        dfs(count + 1);
        operators[i] += 1;
        temp.pop();
    }
}
dfs(0);

console.log(max+"\n"+min);