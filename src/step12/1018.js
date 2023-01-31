const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
const [n,m] = (input.shift().split(" ")).map(el => +el);
let board = input.map(el=> el.split(""));
let answer = 90;
const white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
const black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

for(let i = 0; i <= n-8; i++){
    for(let j = 0; j <= m-8; j++){
        check(j,i);
    }
}

function check(x,y){
    let checkWhite = 0;
    let checkBlack = 0;
    for (let i = y; i < y + 8; i++) {
        for (let j = x; j < x + 8; j++) {      
            if (board[i][j] !== white[i-y][j-x]){
                checkWhite++;
            }
            if (board[i][j] !== black[i-y][j-x]){
                checkBlack++;
            }
        }
    }
    let min = checkBlack < checkWhite ? checkBlack:checkWhite;
    if(min < answer) answer = min;
}
console.log(answer);