function solve(arr) {
    let nums = [];
    const operandsMap = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b
    }
    const dataHandler = {
        number: (arr, e) => {
            arr.push(e);
            return arr;
        },
        string: (arr, e, map) => {
            if (arr.length < 2) {
                return 'Error: not enough operands!';
            } else {
                let b = arr.pop();
                let a = arr.pop();
                arr.push(map[e](a, b));
            }
            return arr;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        dataHandler[typeof arr[i]](nums, arr[i], operandsMap);
    }

    if (nums.length !== 1) {
        return 'Error: too many operands!';
    } else {
        return nums[0];
    }
}
console.log(solve([3,
    4,
    '+']));