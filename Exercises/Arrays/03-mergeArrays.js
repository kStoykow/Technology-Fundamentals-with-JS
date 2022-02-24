function solve(arr, arr2) {
    function concatOrAdd(i, e, arr) {
        return i % 2 === 0 ? Number(e) + Number(arr[i]) : e + arr[i];
    }

    return arr.map((e, i) => concatOrAdd(i, e, arr2)).join(' - ');
}
console.log(solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]));