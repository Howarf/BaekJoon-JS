let numPiece;
function SplitNum(params) {
    for(let i=10;i<=100;i++){
        numPiece = String(i).split("").map(el=>Number(el));
    }
}

