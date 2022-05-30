let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
for(let i = 0; i < input.length; i++){
    let N = Number(input[i]);
    if(N === 0) break;
    const M = N*2;
    let result = [];
    let primArr = Array(M + 1).fill(true);
    primArr[0] = primArr[1] = false;
    for(let i = 2; i <= Math.ceil(Math.sqrt(M)); i++){
        if(primArr[i]){
            for(let num = 2; (i*num) <= M; num++){
                primArr[i*num] = false;
            }
        }
    }
    for(let i = N + 1; i <= M; i++){
        if(primArr[i]){
            result.push(i);
        }
    }
    console.log(result.length);
}