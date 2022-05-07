let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const testCase = input.shift();
for(let a = 0; a < testCase; a++){
    let floor = + input.shift();
    let roomNum = + input.shift();
    let num = Array.from(Array(floor+1),()=> Array(roomNum+1).fill(0));
    for(let i = 1; i <= roomNum; i++){
        num[0][i] = i;
    }
    for(let i = 1; i <= floor; i++){
        for(let j = 1; j <= roomNum; j++){
            num[i][j] += num[i-1][j] + num[i][j-1];
        }
    }
    console.log(num[floor][roomNum]);
}