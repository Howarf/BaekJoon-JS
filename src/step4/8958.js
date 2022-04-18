const fs = require('fs');
let input,data
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
data = Number(input[0]);
for(var i=1;i<=data;i++){
    let count=0
    let sum=0
    for(var j=0;j<input[i].length;j++){
        if(input[i][j] === "O"){
            count++;
        }
        else{
            count = 0;
        }
        sum += count;
    }
    console.log(sum);
}