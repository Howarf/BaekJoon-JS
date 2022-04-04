var data = []
const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.on("line",(std) => {
    data.push(parseInt(std));
});
rl.on("close",() => {
    if(data[0]>0&&data[1]>0) console.log("1");
    else if(data[0]>0&&data[1]<0) console.log("4");
    else if(data[0]<0&&data[1]>0) console.log("2");
    else if(data[0]<0&&data[1]<0) console.log("3");
    else console.log("0,0");
})