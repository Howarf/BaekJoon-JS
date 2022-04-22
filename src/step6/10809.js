const fs = require("fs");
let input,data=[];
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
for(let i=97;i<123;i++){
    data.push(input.indexOf(String.fromCharCode(i)));
}
console.log(data.join(" "));