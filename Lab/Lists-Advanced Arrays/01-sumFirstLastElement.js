function solve(arr){
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());
    return firstElement + lastElement;
}