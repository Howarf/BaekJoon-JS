const fs = require('fs');
let input;
if(process.platform=="linux"){
    input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
}
else{
    input = fs.readFileSync('../data.txt').toString().trim().split('\r\n');
}
let fullPrice = Number(input.shift());
let count = input.shift();
let maxPrice = 0;
for(let i = 0; i < count; i++){
    let stuff = input[i].split(" ");
    maxPrice += Number(stuff[0]*stuff[1]);
}
fullPrice != maxPrice ? console.log("No"):console.log("Yes");