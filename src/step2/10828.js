let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const t = input.shift();
let stack = [];
let result = [];
for(let i = 0; i < t; i++){
    switch(input[i]){
        case "pop":
            result.push(stack.pop() || -1);
            break;
        case "size":
            result.push(stack.length);
            break;
        case "empty":
            result.push(stack[0] ? 0 : 1);
            break; 
        case "top":
            result.push(stack[stack.length-1] || -1);
            break;
        default:
            stack.push(input[i].split(" ")[1]);
            break;
    }
}
console.log(result.join("\n"));
//////////////////////////////이런방식도 존재
// const fun = {
//   pop: () => stack.pop() || -1,
//   size: () => stack.length,
//   empty: () => stack[0] ? 0 : 1,
//   top: () => stack[stack.length - 1] || -1,
//   push: (item) => {
//     stack.push(item.split(" ")[1]); 
//     return '';
//   }
// }
// const answer = input.reduce((acc, v) => 
// 	acc + (fun[v] ? `${fun[v]()}\n` : fun.push(v)), '');
// console.log(answer);