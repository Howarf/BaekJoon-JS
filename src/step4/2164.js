let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
class Node{
    constructor(item){
        this.item = item;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(item){
        const node = new Node(item);
        if(this.head === null){
            this.head = node;
            this.head.next = null;
        }
        else{
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
    }
    pop(){
        if(this.empty()==1) return -1;
        const popItem = this.head;
        this.head = this.head.next;
        this.length--;
        return popItem.item;
    }
    size(){
        return this.length;
    }
    empty(){
        if(this.length === 0) return 1;
        else return 0;
    }
    front(){
        if(this.length === 0) return -1;
        return this.head.item;
    }
    back(){
        if(this.length === 0) return -1;
        return this.tail.item;
    }
}
let arr = new Queue();
for(let i = 1; i <= input; i++){
    arr.push(i);
}
while(arr.length !== 1){
    arr.pop();
    arr.push(arr.pop());
}
console.log(arr.front());