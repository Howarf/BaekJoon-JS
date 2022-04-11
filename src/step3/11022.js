const fs = require('fs');
let input,num,result="";
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
for(var i=1;i<input.length;i++){
    num = input[i].split(" ");
    result += "Case #"+i+": "+num[0]+" + "+num[1]+" = "+(Number(num[0])+Number(num[1]))+"\n";
}
console.log(result);