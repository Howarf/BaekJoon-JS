const fs = require("fs");
let input,croatia = ["c=","c-","dz=","d-","lj","nj","s=","z="];;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
function solution(str) {
    for(let i = 0;i<croatia.length;i++){
        str = str.replaceAll(croatia[i],"*");
    }
    console.log(str.length);
}
solution(input);