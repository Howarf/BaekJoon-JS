let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
for(let i = 0; i < input.length-1; i++){
    const [a,b] = input[i].split(" ");
    if(Number(a)<Number(b) && (Number(b)%Number(a))===0){
        console.log("factor");
    }
    else if(Number(a)>Number(b) && (Number(a)%Number(b))===0){
        console.log("multiple");
    }
    else{
        console.log("neither");
    }
}