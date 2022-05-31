let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const testCase = input.shift();
let bodys = input.map(el => el.split(" "));
let bodylank = [];
for(let i = 0; i < testCase; i++){
    let counter = 1;
    for (let j = 0; j < testCase; j++) {
        if (i !== j) {
            if (bodys[i][0] < bodys[j][0] && bodys[i][1] < bodys[j][1]){
                counter++;
            }
        }
    }
    bodylank.push(counter);
}
console.log(bodylank.join(" "));