const fs = require("fs");
let input,data=[];
let result="";
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
for(let i=0;i<input.length;i++){
    for(let j=97;j<123;j++){
        if(j===input[i].toLowerCase().charCodeAt()){
            data.push(j);
        }
    }
}
console.log(data.in)