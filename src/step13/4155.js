let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
input.forEach(el => {
    let result = [];
    el = el.split(" ");
    el.forEach(i =>{
        result.push(Math.pow(i,2));
    })
    result.sort(function(a, b){
        return a - b;
    });
    if(result[0] !== 0){
        result[0]+result[1] === result[2] ? console.log("right") : console.log("wrong");
    }
})