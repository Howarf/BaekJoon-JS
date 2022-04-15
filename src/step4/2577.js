const fs = require('fs');
let input,data
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().split('\r\n');
}
data = String(input[0]*input[1]*input[2]);
for(let i=0;i<=9;i++){
    console.log(data.split(i).length-1);
}