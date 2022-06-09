let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("").map(el => parseInt(el));
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("").map(el => parseInt(el));
}
input = input.sort(function(a,b){
    return b - a;
});
console.log(input.join(""));