function sumDigits(number) {
    number = number.toString();
    let digitsSum = 0;

    for (let i = 0; i < number.length; i++) {
        digitsSum += Number(number[i]);
    }

    console.log(digitsSum);
}