var data =[]
const rl=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',(line)=>{
    data = line.split(' ').map(el => parseInt(el));
});
rl.on('close',()=>{
    console.log((data[0]+data[1])%data[2]);
    console.log(((data[0]%data[2])+(data[1]%data[2]))%data[2]);
    console.log((data[0]*data[1])%data[2]);
    console.log(((data[0]%data[2])*(data[1]%data[2]))%data[2]);
    process.exit;
});