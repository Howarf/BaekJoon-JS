let answer='';
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on("line",(line)=>{
    const data = line.split(' ');
    if(data.length == 2){
        answer += parseInt(data[0])+parseInt(data[1]) + '\n';
    }
}).on("close",()=>{
    console.log(answer);
    process.exit();
})