let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const [t, m] = input.shift().split(" ");
input = input.filter(el => el.length >= m);
let word = new Map();
for(let i = 0; i < input.length; i++){
    if(word.has(input[i])){
        let a = word.get(input[i]);
        word.set(input[i],a+1);
    }
    else{
        word.set(input[i],1);
    }
}
word = [...word];
word.sort((a, b) => {
    if(a[1] === b[1]){
        if(a[0].length === b[0].length){
            return a[0].localeCompare(b[0]);
        }
        return b[0].length - a[0].length;
    }
    return b[1] - a[1];
});
let answer = new Map(word);
answer = [...answer.keys()];
console.log(answer.join("\n"));