let input,startS = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.",recursionS = [`"재귀함수가 뭔가요?"`,`"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`,
`마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`,`그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`],
endS = "라고 답변하였지.",awnserS = `"재귀함수는 자기 자신을 호출하는 함수라네"`,count = 0,underBar = [];
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ");
}
function makeUnderBar(num){
    let s = "";
    for(let i = 0; i < num*4; i++){
        s += "_";
    }
    underBar.push(s);
}
console.log(startS);
recursionF();
function recursionF(){
    makeUnderBar(count);
    console.log(underBar[count]+recursionS[0]);
    if(count < input){
        for(let i = 1; i < recursionS.length; i++){
            console.log(underBar[count]+recursionS[i]);
        }
        count++;
        recursionF();
    }
    else{
        console.log(underBar[count]+awnserS);
        for(let i = input; i >= 0; i--){
            console.log(underBar[i]+endS);
        }
    }
}