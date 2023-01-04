let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const num = parseInt(input.shift());
const points = input.map(el=>(el.split(" ")));
let paper = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;
for(let i = 0; i < num; i++){
    for(let x = parseInt(points[i][0]); x < parseInt(points[i][0])+10; x++){
        for(let y = parseInt(points[i][1]); y < parseInt(points[i][1])+10; y++){
            if(++paper[x][y] == 1){
                count++;
            }
        }
    }
}
console.log(count);