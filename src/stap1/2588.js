var first,second=[],result=[];
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',(line)=>{
    if(first==undefined){
        first = parseInt(line);
    }
    else{
        second = line.split('').map(el => parseInt(el));
        console.log(first);
        console.log(second);
    }
});
rl.on('close',()=>{
    result=second.map(data => parseInt(data)*first);
    console.log(Number(result[2]));
    console.log(Number(result[1]));
    console.log(Number(result[0]));
    console.log((Number(result[0])*100)+(Number(result[1])*10)+Number(result[2]));
});