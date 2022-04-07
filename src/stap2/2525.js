const fs = require('fs');
let input,data,upMinute,upHour;
if(process.platform=="linux"){
    input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
}
else{
    input = fs.readFileSync('../data.txt').toString().trim().split('\r\n');
}
data = input[0].split(' ');
upMinute = parseInt(Number(data[1])+Number(input[1]));
upHour = (Number(data[0])+parseInt(upMinute/60))%24;
if(data[1]+input[1] >= 60){
    if(Number(data[0])+(upMinute/60) >= 24){
        console.log(upHour+" "+upMinute%60);
    }
    else{
        console.log(upHour+" "+upMinute%60);
    }
}
else{
    console.log(data[0]+" "+upMinute%60);
}