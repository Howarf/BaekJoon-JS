var id = [55];
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (line) => {
    id=line;
});
rl.on('close',()=>{
    console.log(id+"??!");
    process.exit;
})