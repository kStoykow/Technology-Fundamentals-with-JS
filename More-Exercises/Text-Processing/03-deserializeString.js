function solve(input) {
    input.pop();
    let result = [];
    
    for (const line of input) {
        let [key, indexes] = line.split(':');
        let indexArr = indexes.split('/');
        for (const currIndex of indexArr) {
            result[currIndex] = key;
        }
    }

    console.log(result.join(''));
}
solve('a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end')