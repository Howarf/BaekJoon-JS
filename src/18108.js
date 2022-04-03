const rl=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',(line)=>{
    console.log(Number(line)-543);
    process.exit;
})