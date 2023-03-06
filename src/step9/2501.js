const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ");
}
const [num,minTurn] = input;
let awnser = [];
for(let i = 1; i < Math.sqrt(num); i++){
    if(num % i === 0){
        awnser.push(i);
        if(num/i != i) {awnser.push(num/i)}
    }
}
awnser.sort(function(a,b){
    return a - b;
})
if(awnser[minTurn-1] === undefined){
    console.log(0);
}
else{
    console.log(awnser[minTurn-1]);
}