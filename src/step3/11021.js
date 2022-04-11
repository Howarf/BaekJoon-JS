let answer='',caseNum=1;
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on("line",(line)=>{
    const data = line.split(' ');
    if(data.length == 2){
        answer += "Case #"+(caseNum++)+": "+(Number(data[0])+Number(data[1]))+'\n';
    }
}).on("close",()=>{
    console.log(answer);
    process.exit();
})