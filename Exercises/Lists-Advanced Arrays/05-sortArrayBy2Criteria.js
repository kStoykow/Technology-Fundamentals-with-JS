function sorting(array) {
    array.sort(function (a, b) {
        if (a.length - b.length > 0) {
            return 1;
        } else if (a.length - b.length < 0) {
            return -1;
        } else {
            if (a > b) {
                return 1;
            } else if (a == b) {
                return 0;
            } else {
                return -1;
            }
        }
    });

    console.log(array.join('\n'));
}