const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.on('line',(yaer) => {
    if(Number(yaer)%400==0 || Number(yaer)%4==0 && Number(yaer)%100>0){
        console.log("1");
    }
    else console.log("0");
});