const fs = require('fs');
let input,data,result="";
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
for(var i=0;i<input.length-1;i++){//10951번 문제는 -1빼면 정답
    data = input[i].split(" ");
    result += Number(data[0])+Number(data[1])+"\n";
}
console.log(result);