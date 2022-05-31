let input,primArr = [], result = [];
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
for(let i = 0; i < input.length; i++){
    let N = Number(input[i]);
    primArr = [], result = [];
    if(N % 2 === 1) continue;
    primNum(N);
    let a=[],b=[],min=[];
    for(let i = 0; i < primArr.length; i++){
        for(let j = 0; j < primArr.length; j++){
            if((primArr[i] + primArr[j]) === N){
                result.push(primArr[i] + " " + primArr[j])
                break;
            }
        }
    }
    // for(let i = 0; i < a.length; i++){

    // }
    console.log(result);
}
function primNum(num){
    for(let i = 0; i <= num; i++){
        let bool = true;
        if(i < 2){
            bool = false;
        }
        for(let j = 2; j*j <= i; j++){
            if(i % j === 0){
                bool = false;
                break;
            }
        }
        if(bool){
            primArr.push(i);
        }
    }
}