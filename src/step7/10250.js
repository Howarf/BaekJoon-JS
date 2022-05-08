let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
let T = input.shift();
let answer;
for(let i = 0; i < T; i++){
    const data = input[i].split(" ");
    let H = Number(data[0]);
    let N = Number(data[2]);
    let roomNum = 1;
    while(N > H){
        roomNum++;
        N -= H;
    }
    roomNum < 10 ? (answer = `${N}0${roomNum}`) : (answer = `${N}${roomNum}`);
    console.log(answer);
}