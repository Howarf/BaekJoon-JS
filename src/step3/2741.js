const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
let result='';
rl.on("line",(line)=>{
    const num = parseInt(line);
    for(let i=0;i<num;i+0){
        result += ++i+"\n";
    }
    console.log(result);
    process.exit();
});