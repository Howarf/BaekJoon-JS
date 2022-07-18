let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const avgFruit = input.shift();
let point = {x:0,y:0};
let points = [];
let max_h = 0, min_h = 0, mid_h = 0, max_w = 0, min_w = 0, mid_w = 0;
function setPoint(direction,force){
    if(direction === 1){point.x -= force;}
    else if(direction === 2){point.x += force;}
    else if(direction === 3){point.y -= force;}
    else{point.y += force;}
    points.push({x:point.x, y:point.y});
}
input.forEach(el => {
    el = el.split(" ");
    setPoint(Number(el[0]),Number(el[1]));
})
points.map(el => {
    if(el.x > max_h){max_h = el.x;}
    if(el.y > max_w){max_w = el.y;}
    if(el.x < min_h){min_h = el.x;}
    if(el.y < min_w){min_w = el.y;}
});
points.map(el => {
    if(el.x > min_h && el.x < max_h){mid_h = el.x;}
    if(el.y > min_w && el.y < max_w){mid_w = el.y;}
})
let small_x = 0, small_y = 0;
points.forEach(el => {
    if(el.x == mid_h && el.y != mid_w){
        small_y = Math.max(el.y, mid_w) - Math.min(el.y, mid_w);
    }
    if(el.y == mid_w && el.x != mid_h){
        small_x = Math.max(el.x, mid_h) - Math.min(el.x, mid_h);
    }
})
let bigbox = (max_h - min_h) * (max_w - min_w);
let smallbox = small_x * small_y;
console.log((bigbox-smallbox)*avgFruit);