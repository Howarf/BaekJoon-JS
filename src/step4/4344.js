const { count } = require('console');
const fs = require('fs');
let input,num
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
num = Number(input[0]);
for(let i=1;num>=i;i++){
    let sum = 0;
    let avg = 0;
    let count = 0;
    let data = input[i].split(" ").map(el => Number(el));
    for(let j = 1;data[0]>=j;j++){
        sum += data[j];
    }
    avg = (sum/data[0]);
    for(let a = 1;a<=data[0];a++){
        if(data[a]>avg){
            count++;
        }
    }
    console.log((count/(data.length-1)*100).toFixed(3)+"%");
}