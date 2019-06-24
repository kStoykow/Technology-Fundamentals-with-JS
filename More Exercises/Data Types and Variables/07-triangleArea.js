function area(a, b, c) {
    let semiPerimeter = (a + b + c) / 2;
    let areaBySides = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
    console.log(areaBySides);
}