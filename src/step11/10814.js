let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(" "));
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n").map(el => el.split(" "));
}
const testCase = input.shift();
const data = input.sort((a,b) => {
    if(a[0] === b[0]){
        a[1].localeCompare(b[1]);
    }
    else{
        return a[0] - b[0];
    }
})
console.log(data.map(el => el.join(" ")).join("\n"));