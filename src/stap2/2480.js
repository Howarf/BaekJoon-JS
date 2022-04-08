const fs = require('fs');
let input,maxPoint = 0;
if(process.platform=="linux"){
    input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
}
else{
    input = fs.readFileSync('../data.txt').toString().trim().split(' ');
}
input.forEach(el => {
    if(el >= maxPoint){
        maxPoint = el;
    }
});
if(input[0]==input[1]){
    if(input[0]==input[2]){
        console.log(10000+(input[0]*1000));
    }
    else{console.log(1000+(input[0]*100));}
}
else if(input[0]==input[2]){
    console.log(1000+(input[0]*100));
}
else if(input[1]==input[2]){
    console.log(1000+(input[1]*100));
}
else{
    console.log(maxPoint*100);
}