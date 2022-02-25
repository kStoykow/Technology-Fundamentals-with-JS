function isLowerOrUpper(char) {
    const upperOrLowerMap = {
        true: 'upper-case', false: 'lower-case'
    }
  return  upperOrLowerMap[char === char.toUpperCase()];
}
console.log(isLowerOrUpper('b'));