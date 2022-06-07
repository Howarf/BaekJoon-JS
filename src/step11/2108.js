let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(el => parseInt(el));
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n").map(el => parseInt(el));
}
const testCase = parseInt(input.shift(0));
let sum = countNum = 0;
let min = Math.min(...input);
let max = Math.max(...input);
sum = input.reduce((a,b) => {return a+b});
input = input.sort(function(a,b) {return a - b;});
const uniq = input.reduce((accu, curr) => { 
    accu[curr] = (accu[curr] || 0)+1; 
    return accu;
  }, {});
  let minArr = [];
let uniqMaxNum = Math.max.apply(null, Object.values(uniq));
Object.keys(uniq).forEach(function(key) {
  if(uniq[key] === uniqMaxNum) {
    minArr.push(key);
  }
});

if(minArr.length > 1) {
  minArr.sort(function (a,b) {return a - b;});
  countNum = minArr[1];
} else {
  countNum = minArr[0];
}
let answer = Math.round(sum/testCase) +"\n"+ input[Math.floor(testCase/2)] +"\n"+ countNum +"\n"+ (max - min);
console.log(answer);