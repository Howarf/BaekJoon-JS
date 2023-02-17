const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
let n = +input;
let count2 = 0;
let count1 = 0;
fib(n);
fibonacci(n);
function fib(n) {
    if (n == 1 || n == 2){
        count1++;
        return ;
    }
    else{
        return (fib(n - 1) + fib(n - 2));
    }
}
function fibonacci(n) {
    const f = new Array(n+1).fill(0);
    f[1] = f[2] = 1;
    for(let i = 3; i <= n; i++){
        f[i] = f[i - 1] + f[i - 2];
        count2++;
    }
    return f[n];
}
console.log(count1+" "+count2);