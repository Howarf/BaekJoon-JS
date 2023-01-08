let input,count = 0;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
let recursion = function(s, i, l){
    count++;
    if(i >= l){
        return 1;
    }
    else if(s[i] != s[l]){
        return 0;
    }
    else{
        return recursion(s,i+1,l-1);
    }
}
let isPalindrom = function(s){
    return recursion(s,0,s.length-1);
}
for(let i = 1; i <= input[0]; i++){
    let check = isPalindrom(input[i]);
    console.log(check+" "+count);
    count = 0;
}