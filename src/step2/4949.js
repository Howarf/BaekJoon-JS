let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
let answer = [];
for(let text of input){
    const arr = [];
    let result = "yes";
    if(text === ".") break;
    for(let i = 0; i < text.length; i++){
        if(text[i] == "(" || text[i] == "["){
            arr.push(text[i]);
        }
        else if(text[i] == ")"){
            if(arr[arr.length-1] == "("){
                arr.pop();
            }
            else{
                result = "no";
                break;
            }
        }
        else if(text[i] == "]"){
            if(arr[arr.length-1] == "["){
                arr.pop();
            }
            else{
                result = "no";
                break;
            }
        }
        else if(text[i] == ".") break;
    }
    if(arr.length > 0) result = "no";
    answer.push(result);
}
console.log(answer.join("\n"));