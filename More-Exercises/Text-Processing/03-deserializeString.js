function solve(input) {
    function arrFiller(indexesArr, result, char) {
        for (const i of indexesArr) {
            result[i] = char;
        }
        return result;
    }
    function deserializeStr(e, arr) {
        if (e === 'end' === false) {
            let [char, str] = e.split(':');
            let [...indexes] = str.split('/');
            arrFiller(indexes, arr, char);
        }

        return arr;
    }

    let result = [];

    for (const e of input) {
        deserializeStr(e, result);
    }

    return result.join('');
}
console.log(solve(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'])
);