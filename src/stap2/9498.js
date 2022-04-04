const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.on("line",(score) => {
    if(Number(score)>=90) console.log("A");
    else if(Number(score)>=80) console.log("B");
    else if(Number(score)>=70) console.log("C");
    else if(Number(score)>=60) console.log("D");
    else console.log("F");
});