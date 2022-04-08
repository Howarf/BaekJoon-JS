const fs = require('fs');
let input;
if(process.platform=="linux"){
    input = fs.readFileSync('/dev/stdin').toString().trim();
}
else{
    input = fs.readFileSync('../data.txt').toString().trim();
}
for(var i=1;i<10;i++){
    console.log(input+" * "+i+" = "+input*i);
}