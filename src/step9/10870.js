let input,F = [];
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
for(let i = 0; i<=input; i++){
    if(i < 2){
        F.push(i);
    }
    else{
        F.push(F[i-2]+F[i-1]);
    }
}
console.log(F[input]);