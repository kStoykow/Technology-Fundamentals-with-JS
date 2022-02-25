function loadingBar(num) {
    return visualize(num);

    function visualize(n) {
        let bar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];
        let toChange = n / 10;
        bar.splice(0, Math.ceil(toChange), '%'.repeat(toChange >= 100 ? 10 : toChange));

        if (toChange < 10) {
            return `${num}% [${bar.join('')}]\n\Still loading...`;
        }
        return `100% Complete!\n\[${bar.join('')}]`;
    }
}
console.log(loadingBar(1000));