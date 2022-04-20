let createNum=[],numPiece;
let result="";
for(let i=1;i<=10000;i++){
    numPiece = String(i);
    let num = 0;
    for(let a=0;a<numPiece.length;a++){
        num += Number(numPiece[a]);
    }
    createNum.push(i+num);
}
for(let j=1;j<=10000;j++){
    if(createNum.indexOf(j) === -1){
        result += j+"\n";
    }
}
console.log(result);