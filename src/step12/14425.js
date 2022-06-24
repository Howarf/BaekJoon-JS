let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const [n] = input.shift().split(" ");
const strInput = input.map(el => el.trim());
const setList = new Set(strInput.slice(0, n));
const data = strInput.slice(n);
let num = 0;
data.forEach((el) => {
    if(setList.has(el)){
        num++;
    }
})
console.log(num);