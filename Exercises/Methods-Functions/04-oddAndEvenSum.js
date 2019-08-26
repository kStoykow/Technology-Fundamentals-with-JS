function printSum(number) {
    let result = digitsSum();
    console.log(result);
   
    function digitsSum() {
        number = number.toString().split('');
        let evenSum = 0;
        let oddSum = 0;

        for (let i = 0; i < number.length; i++) {
            if(number[i] % 2 === 0){
                evenSum += Number(number[i]);
            }else{
                oddSum += Number(number[i]);
            }
        }

        return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    }
}