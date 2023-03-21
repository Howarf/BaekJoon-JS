let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n").map(Number);
}
const alngl = input[0] + input[1] + input[2];
if(alngl === 180){
    if(input[0] === 60 && input[1] === 60 && input[2] === 60){
        console.log("Equilateral");
    }
    else if(input[0] == input[1] || input[0] == input[2] || input[1] == input[2]){
        console.log("Isosceles");
    }
    else {
        console.log("Scalene");
    }
}
else{
    console.log("Error");
}