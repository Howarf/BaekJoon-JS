let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const size = input.shift().split(" ").map(el => parseInt(el));
let procession = ((input.map(el=>(el.split(" ")))));
let result = "";
for(let i = 0; i < size[0]; i++){
    for(let j = 0; j < size[1]; j++){
        result += parseInt(procession[i][j])+parseInt(procession[i+size[0]][j])+" ";
    }
    result += "\n"
}
console.log(result);