var alam = [];
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on("line",(time)=>{
    alam = time.split(" ").map(el => parseInt(el));
    if(alam[0]<0||alam[0]>24){
        console.log("시간을 0시에서 24시사이로 적어주세요");
    }
    else{
        if(alam[1]<0||alam[1]>59){
            console.log("분침을 0에서 59분사이로 적어주세요");
        }
    }
});
rl.on("close",()=>{
    if(alam[1]>=45){
        console.log(alam[0]+" "+(alam[1]-45));
    }
    else{
        if(alam[0]==0){
            console.log((alam[0]+23)+" "+(60+(alam[1]-45)));
        }
        else{
            console.log((alam[0]-1)+" "+(60+(alam[1]-45)));
        }
    }
});