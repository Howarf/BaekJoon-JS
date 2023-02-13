const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
const tile = input.map(el => el.split(" ").map(Number));
let blink = checkBlink(tile);
let answer = [];
dfs(0);
function dfs(line){
    if(line === blink.length){
        for(let i = 0; i < tile.length; i++){
            for(let j = 0; j < tile[0].length; j++){
                answer.push(tile[i][j]);
            }
            console.log(answer.join(" "));
            answer = [];
        }
        process.exit(0);
    }
    let x = blink[line][0];
    let y = blink[line][1];
    for(let i = 1; i <= tile.length; i++){
        if(isPossible(x,y,i)){
            tile[x][y] = i;
            dfs(line + 1);
            tile[x][y] = 0;
        }
    }
}
function checkBlink(map){
    const blink = [];
    for(let i = 0; i < map.length; i++){
        for(let j = 0; j < map[i].length; j++){
            if(map[i][j] === 0){
                blink.push([i,j]);
            }
        }
    }
    return blink;
}
function isPossible(x, y, value){
    for(let i = 0; i < tile.length; i++){
        if(tile[x][i] === value) return false;
    }
    for(let i = 0; i < tile.length; i++){
        if(tile[i][y] === value) return false;
    }
    let threeX = Math.floor(x / 3) * 3;
    let threeY = Math.floor(y / 3) * 3;
    for(let i = threeX; i < threeX + 3; i++){
        for(let j = threeY; j < threeY +3; j++){
            if(tile[i][j] === value) return false;
        }
    }
    return true;
}