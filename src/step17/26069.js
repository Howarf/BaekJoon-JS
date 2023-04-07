let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const t = input.shift();
let list = input.map(el => el.split(" "));
let dance = new Set();
dance.add("ChongChong");
list.forEach(el => {
    if(dance.has(el[0]) || dance.has(el[1])){
        dance.add(el[0]);
        dance.add(el[1]);
    }
})
console.log(dance.size);