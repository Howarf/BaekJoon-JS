const rl = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
let data=[],maxNum=0,sum=0;
rl.on("line",(line)=>{
    data.push(line.split(" ").map(el=>Number(el)));
}).on("close",()=>{
    for(var i=0;i<data[0];i++){
        for(var j=0;j<data[0];j++){
            if(maxNum<data[1][j]){
                maxNum = data[1][j];
            }
        }
        sum += ((data[1][i]/maxNum)*100);
    }
    console.log(sum/data[0]);
})