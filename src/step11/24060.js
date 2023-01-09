let input,count = 0;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(el => (el.split(" ").map((v) => +v)));
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n").map(el => (el.split(" ").map((v) => +v)));
}
let target;
const [[N,K],arr] = input;
const merge = function(arr1, arr2){
    let result = [];
    let [i, j] = [0,0];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else{
            result.push(arr2[j]);
            j++;
        }
        count++;
        if(count === K){
            target = result[result.length-1];
        }
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
        count++;
        if(count === K){
            target = result[result.length-1];
        }
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
        count++;
        if(count === K){
            target = result[result.length-1];
        }
    }
    return result;
}
const mergeSort = function(arr){
    if(arr.length <= 1){
        return arr;
    }
    let mid = Math.ceil(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}
mergeSort(arr);
if(!target){
    target = -1;
}
console.log(target);