function searcher(arr, values) {
    let take = values.shift();
    let shift = values.shift();
    let find = values.shift();
    let myArr = arr.slice(0, take);

    for (let i = 0; i < shift % arr.length; i++) {
        myArr.shift();
    }

    return `Number ${find} occurs ${myArr.filter(e => e == find).length} times.`;
}
console.log(searcher([5, 2, 3, 4, 1, 6],
    [5, 6, 3]));