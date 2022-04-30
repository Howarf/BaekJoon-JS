var data = []
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',(str) => {
    data = str.split(' ').map(el => parseInt(el));
});
rl.on('close',() => {
    if(data[0] < data[1]){
        console.log("<");
    }
    else if(data[0] > data[1]){
        console.log(">");
    }
    else{
        console.log("==");
    }
});