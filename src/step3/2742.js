const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
let result='';
rl.on("line",(line)=>{
    let num = parseInt(line);
    for(num;num>0;num--){
        result += num+"\n";
    }
    console.log(result);
    process.exit();
});