let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const testcase = input.shift();
for(let i = 0; i < testcase; i++){
    let [x1,y1,r1,x2,y2,r2] = input[i].split(" ").map(el => parseInt(el));
    const p1 = {x:x1,y:y1};
    const p2 = {x:x2,y:y2};
    const distance = (((p1.x - p2.x) ** 2)+((p1.y - p2.y) ** 2));
    console.log(findPoint(distance,r1,r2));
}
function findPoint(d,r1,r2){
    const sum = (r1 + r2) ** 2;
    const diff = (r1 - r2) ** 2;
    if(d == 0){
        if(r1 == r2) {return -1}
        return 0
    }
    else{
        if(d > sum || d < diff) {return 0}
        else if(d == sum || d == diff) {return 1}
        else if(d < sum) {return 2}
    }
}