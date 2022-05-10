let input,count=0;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
while(true){
    if(input%5 === 0){
        console.log(input/5 + count);
        break;
    }
    if(input < 0){
        console.log(-1);
        break;
    }
    input -= 3;
    count++;
}