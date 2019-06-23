function isPrime(number) {
    let divides = 0;
    let isPrime = false;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divides++;
        }
    }

    if (divides <= 2) {
        isPrime = true;
    }

    if (isPrime) {
        console.log('true');
    } else {
        console.log('false');
    }
}