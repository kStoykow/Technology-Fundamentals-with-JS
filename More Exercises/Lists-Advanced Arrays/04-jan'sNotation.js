function solve(arr) {
    let nums = [];
    const operandsMap = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            nums.push(arr[i]);

        } else {
            if (nums.length < 2) {
                return 'Error: not enough operands!';
            } else {
                let b = nums.pop();
                let a = nums.pop();
                nums.push(operandsMap[arr[i]](a, b));
            }
        }
    }

    if (nums.length !== 1) {
        return 'Error: too many operands!';
    } else {
        return nums[0];
    }
}
console.log(solve([[3,
    4,
    '+']]));