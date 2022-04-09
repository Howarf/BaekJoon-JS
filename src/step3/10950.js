const fs = require('fs');
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
for(var i=1;input[0]>=i;i++){
    let num = input[i].split(" ");
    console.log(Number(num[0])+Number(num[1]));
}