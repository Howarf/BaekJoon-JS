let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const T = input.shift();
for(let i = 0; i < T; i++){
    let count = 0;
    const [x1,y1,x2,y2] = input.shift().split(" ").map(el => +el);
    let starN = input.shift();
    for(let j = 0; j < starN; j++){
        const [cx,cy,r] = input.shift().split(" ").map(el => +el);
        if((x1 - cx)**2 + (y1 - cy)**2 < r**2){
            count++;
        }
        if((x2 - cx)**2 + (y2 - cy)**2 < r**2){
            count++;
        }
        if((x1 - cx)**2 + (y1 - cy)**2 < r**2 && (x2 - cx)**2 + (y2 - cy)**2 < r**2){
            count -= 2;
        }
    }
    console.log(count);   
}