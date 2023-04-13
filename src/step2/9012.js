let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const t = +input.shift();
for(let i = 0; i < t; i++){
    const cases = input[i];
    const arr = [];
    let result = "YES";
    for(let j = 0; j < input[i].length; j++){
        if(input[i][j] === "("){
            arr.push(1);
        }
        else{
            if(!arr.pop()){
                result = "NO";
            }
        }
    }
    if(arr.length !== 0){
        result = "NO";
    }
    console.log(result);
}