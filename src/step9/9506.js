const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n").map(Number);
}
let awnser = [];
for(let i = 0; i < input.length-1; i++){
    let result = [];
    let sum = 0;
    awnser = [];
    measure(input[i]);
    for(let j = 0; j < awnser.length-1; j++){
        sum += awnser[j];
        result.push(awnser[j]);
    }
    if(sum === input[i]){
        console.log(input[i]+" = "+ result.join(" + "));
    }
    else{
        console.log(input[i]+" is NOT perfect.");
    }
}
function measure(num){
    for(let i = 1; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            awnser.push(i);
            if(num/i != i) {awnser.push(num/i)}
        }
    }
    awnser.sort(function(a,b) {return a - b;})
}