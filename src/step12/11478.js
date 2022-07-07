let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
const slice = new Set();
for(let i = 0; i <= input.length; i++){
    for(let j = i+1; j <= input.length; j++){
        slice.add(input.slice(i,j))
    }
}
console.log(slice.size);