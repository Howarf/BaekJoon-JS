const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const rank = {"A+" : 4.5,"A0" : 4.0,"B+" : 3.5,"B0" : 3.0,"C+" : 2.5,"C0" : 2.0,"D+" : 1.5,"D0" : 1.0,"F" : 0.0};
let myCredit = 0;
let totalCredit = 0;
function calc(data){
    let credit = +data.split(" ")[1];
    let myRank = data.split(" ")[2];
    if(myRank !== "P"){
        myCredit += credit * rank[myRank];
        totalCredit += credit;
    }
}
for(let i = 0; i < input.length; i++){
    calc(input[i]);
}
console.log((myCredit/totalCredit).toFixed(6));