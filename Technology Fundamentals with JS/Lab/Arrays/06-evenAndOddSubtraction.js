function subtraction (array){
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < array.length; i++) {

    if(array[i] % 2 === 0){
        evenSum += array[i];
    }else{
        oddSum += array[i];
    }   
}

console.log(evenSum - oddSum)
}
subtraction ([3,5,7,9])