const fs = require("fs");
let input,max,index,overlap = false;
const result = new Array(26).fill(0);
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().toLowerCase();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().toLowerCase();
}
for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97] ++;
}
max = Math.max.apply(null,result);
index = result.indexOf(max);
for(let j = 0; j < 26; j++){
    if(result[j] === max && index != j){
        overlap = true;
        break;
    }
}
console.log(overlap ? "?" : String.fromCharCode(index+65));