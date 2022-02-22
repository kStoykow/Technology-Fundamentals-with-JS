function condense(arr) {
    let myArr = arr.map(Number);

    function condenseWhilePossible(myArr, i, agg, e) {
        if (myArr[i + 1] != undefined) {
            agg[i] = e + myArr[i + 1];
        }
        return myArr;
    }

    while (myArr.length > 1) {
        myArr = myArr.reduce((a, e, i, myArr) => {
            condenseWhilePossible(myArr, i, a, e);
            return a;
        }, new Array(myArr.length - 1));
    }

    return myArr[0];
}
console.log(condense(['5', '0', '4', '1', '2']));