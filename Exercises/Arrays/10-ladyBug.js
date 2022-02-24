function solve(data) {
    const directionsMap = {
        left: (arr, i, length, dir, isGone) => {
            if (arr[i] == 1) {
                let init = i;
                while (arr[i - length] == 1 && length != 0) {
                    i -= length;
                }
                if (isGone(arr, i, length, dir)) {
                    arr[init] = 0;
                } else {
                    arr[init] = 0;
                    arr[i - length] = 1;
                }
            }

            return arr;
        },
        right: (arr, i, length, dir, isGone) => {
            if (arr[i] === 1) {
                let init = i;
                while (arr[i + length] == 1 && length != 0) {
                    i += length;
                }
                if (isGone(arr, i, length, dir)) {
                    arr[init] = 0;
                } else {
                    arr[init] = 0;
                    arr[i + length] = 1;
                }
            }

            return arr;
        }
    }
    function checkIfValidIndex(arr, i) {
        if (arr[i] != undefined) {
            return true;
        }
        return false;
    }
    function isGone(arr, i, length, dir) {
        const dirMap = {
            left: (arr, i, length) => {
                if (i - length < 0 || i - length >= arr.length) {
                    return true;
                }
                return false;
            },
            right: (arr, i, length) => {
                if (i + length >= arr.length || i + length < 0) {
                    return true;
                }
                return false;
            }
        }

        return dirMap[dir](arr, i, length);
    }

    let arr = new Array(data.shift()).fill(0);
    let init = data.shift().split(' ').map(Number);
    for (let i = 0; i < init.length; i++) {
        if (arr[init[i]] != undefined) {
            arr[init[i]] = 1;
        }
    }

    for (let i = 0; i < data.length; i++) {
        let bugIndex = Number(data[i].split(' ')[0]);
        let dir = data[i].split(' ')[1];
        let length = Number(data[i].split(' ')[2]);

        if (checkIfValidIndex(arr, bugIndex)) {
            directionsMap[dir](arr, bugIndex, length, dir, isGone);
        }
    }
    return arr.join(' ');
}
console.log(solve([
    8, '0 4',
    '1 left 0']));