let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
for(let i = 0; i < input.length; i++){
    let arr = input[i].split(" ").map(Number);
    arr.sort(function(a,b){return b - a});
    if(arr[0] === 0){
        break;
    }
    if(arr[0] < (arr[1]+arr[2])){
        if(arr[0] == arr[1] && arr[0] == arr[2]){
            console.log("Equilateral");
        }
        else if(arr[0] == arr[1] || arr[0] == arr[2] || arr[1] == arr[2]){
            console.log("Isosceles");
        }
        else{
            console.log("Scalene");
        }
    }
    else{
        console.log("Invalid");
    }
}