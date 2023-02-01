const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
const n = +input.shift();
let answer = [];
for(let i = 0; i < n; i++){
    const map = {};
    const t = +input.shift();
    for(let j = 0; j < t; j++){
        const [names,kinds] = (input.shift()).split(" ");
        if(map[kinds]){
            map[kinds].push(names);
        }
        else{
            map[kinds] = [names];
        }
    }
    let result = 1;
    for(const key in map){
        result *= map[key].length + 1;
    }
    answer.push(result - 1);
}
console.log(answer.join("\n"));