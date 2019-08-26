function loadingBar(num) {
    let bar = visualize();
    console.log(bar);

    function visualize() {
        let arrayBar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];
        let toChange = num / 10;

        for (let i = 0; i < toChange; i++) {
            arrayBar.splice(i, 1, '%');
        }

        if (toChange < 10) {
            return `${num}% [${arrayBar.join('')}]\n\Still loading...`;
        }

        return `100% Complete!\n\[${arrayBar.join('')}]`;
    }
}