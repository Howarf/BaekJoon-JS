const fs = require('fs');
let input,result="";
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
input = input.map(el=>el.split(" "));
for(var i=0;i<input[0][0];i++){
    if(Number(input[0][1])>Number(input[1][i])){
        result += input[1][i]+" ";
    }
}
console.log(result);