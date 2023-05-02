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
        this.prev = null;
    }
}
class Deque{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push_front(item){
        const node = new Node(item);
        if(this.size() === 0){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length += 1;
    }
    push_back(item){
        const node = new Node(item);
        if(this.size() === 0){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.tail;
            this.tail.prev = node;
            this.tail = node;
        }
        this.length += 1;
    }
    pop_front(){
        if(this.size() === 0) return -1;
        else if(this.size() === 1){
            const popItem = this.head.item;
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return popItem;
        }else if(this.size() === 2){
            const popItem = this.head.item;
            this.head = this.head.next;
            this.tail.prev = null;
            this.length -= 1;
            return popItem;
        }else if(this.size() > 2){
            const popItem = this.head.item;
            this.head.next.prev = null;
            this.head = this.head.next;
            this.length -= 1;
            return popItem;
        }
    }
    pop_back(){
        if(this.size() === 0) return -1;
        else if(this.size() === 1){
            const popItem = this.tail.item;
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return popItem;
        }else if(this.size() === 2){
            const popItem = this.tail.item;
            this.tail = this.tail.prev;
            this.head.next = null;
            this.length -= 1;
            return popItem;
        }else if(this.size() > 2){
            const popItem = this.tail.item;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.length -= 1;
            return popItem;
        }
    }
    size(){
        return this.length;
    }
    empty(){
        return this.size() ? 0 : 1;
    }
    front(){
        return this.size() ? this.head.item : -1;
    }
    back(){
        return this.size() ? this.tail.item : -1;
    }
}
const [n, ...commands] = input;
function solution(n, commands) {
	const deque = new Deque();
	let answer = '';
	for (let i = 0; i < commands.length; i += 1) {
		const [command, item] = commands[i].split(' ');
		switch (command) {
			case 'push_front': deque.push_front(item); break;
			case 'push_back': deque.push_back(item); break;
			case 'pop_front': answer += deque.pop_front() + ' '; break;
			case 'pop_back': answer += deque.pop_back() + ' '; break;
			case 'size': answer += deque.size() + ' '; break;
			case 'empty': answer += deque.empty() + ' '; break;
			case 'front': answer += deque.front() + ' '; break;
			case 'back': answer += deque.back() + ' '; break;
			default: break;
		}
	}

	return answer.split(' ').join('\n');
}
const answer = solution(n, commands);
console.log(answer);