let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const [N, M] = input.shift(0).split(" ");
const arr1 = new Set (input.shift(0).split(" ").map(el => Number(el)));
const arr2 = new Set (input.shift(0).split(" ").map(el => Number(el)));
let answer = arr1.size+arr2.size;
let count = 0;
arr2.forEach(el => {
    if(arr1.has(el)){
        count++;
    }
})
arr1.forEach(el => {
    if(arr2.has(el)){
        count++;
    }
})
console.log(answer-count);