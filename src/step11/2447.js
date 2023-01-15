let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const N = input.shift();
const line = [];
starPick(N);
console.log(line.join(""));

function starPick(num){
  for(let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
      star(i,j,num);
    }
    line.push("\n");
  }
}
function star(i,j,num){
  if(i % 3 == 1 && j % 3 == 1){
    line.push(" ");
  }
  else{
    if(num == 1){
      line.push("*");
    }
    else{
      star(parseInt(i/3),parseInt(j/3),parseInt(num/3));
    }
  }
}