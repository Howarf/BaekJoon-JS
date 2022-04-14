const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
data=[],minNum=0,maxNum=0;
rl.on("line", (line)=>{
    data = line.split(" ").map(el => Number(el));
    minNum = data[0];
    maxNum = data[0];
    for(var i=1;i<data.length;i++){
        if(maxNum < data[i]){
            maxNum = data[i];
        }
        if(minNum > data[i]){
            minNum = data[i];
        }
    }
}).on("close",()=>{
    console.log(minNum+" "+maxNum);
})