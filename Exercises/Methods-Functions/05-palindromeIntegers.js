function isTrue(arr) {
    return isPalindrome(arr);

    function isPalindrome(arr) {
        let r = '';
        for (let n of arr) {
            let num = n.toString();
            r += num == num.split('').reverse().join('') ? 'true\n' : 'false\n'
        }
        return r;
    }
}
console.log(isTrue([123, 323, 421, 121]));