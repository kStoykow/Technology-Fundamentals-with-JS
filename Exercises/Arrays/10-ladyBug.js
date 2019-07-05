function isLady(array) {
    let fieldLength = array.shift();
    let field = [];
    for (let getField = 0; getField < fieldLength; getField++) {
        field.push(0);
    }

    let bugsAtIndex = array.shift().split(' ');
    for (let setBugs = 0; setBugs < fieldLength; setBugs++) {
        for (let i = 0; i < bugsAtIndex.length; i++) {
            if (bugsAtIndex[i] >= 0 && bugsAtIndex[i] < fieldLength) {
                field.splice(bugsAtIndex[i], 1, 1);
            }
        }
    }

    for (let getCommand = 0; getCommand < array.length; getCommand++) {
        let nextCommand = array[getCommand].split(' ');
        let ladyBugAtIndex = Number(nextCommand.shift());
        let direction = nextCommand.shift();
        let jumpInterval = Number(nextCommand.shift());

        if ((field[ladyBugAtIndex] == 0) || (ladyBugAtIndex > field.length - 1) || (ladyBugAtIndex < 0)) {
            continue;
        } else {

            if (direction === 'right') {
                if (jumpInterval === 0) {
                    continue;
                } else if (jumpInterval < 0) {
                    jumpInterval = Math.abs(jumpInterval);
                    if (field[ladyBugAtIndex - jumpInterval] === 0) {
                        [field[ladyBugAtIndex], field[ladyBugAtIndex - jumpInterval]] = [field[ladyBugAtIndex - jumpInterval], field[ladyBugAtIndex]];
                    }

                    while (field[ladyBugAtIndex - jumpInterval] !== 0) {
                        jumpInterval *= 2;
                        if (field[ladyBugAtIndex - jumpInterval] === 0) {
                            [field[ladyBugAtIndex], field[ladyBugAtIndex - jumpInterval]] = [field[ladyBugAtIndex - jumpInterval], field[ladyBugAtIndex]];
                        } else if (field[ladyBugAtIndex - jumpInterval] !== (1 || 0) || field[ladyBugAtIndex - jumpInterval] < 0) {
                            field[ladyBugAtIndex] = 0;
                            break;
                        }
                    }
                }

                if (field[ladyBugAtIndex + jumpInterval] === 0) {
                    [field[ladyBugAtIndex], field[ladyBugAtIndex + jumpInterval]] = [field[ladyBugAtIndex + jumpInterval], field[ladyBugAtIndex]];
                }

                while (field[ladyBugAtIndex + jumpInterval] !== 0) {
                    jumpInterval *= 2;
                    if (field[ladyBugAtIndex + jumpInterval] === 0) {
                        [field[ladyBugAtIndex], field[ladyBugAtIndex + jumpInterval]] = [field[ladyBugAtIndex + jumpInterval], field[ladyBugAtIndex]];
                    } else if (field[ladyBugAtIndex + jumpInterval] != (1 || 0) || field[ladyBugAtIndex + jumpInterval] < 0) {
                        field[ladyBugAtIndex] = 0;
                        break;
                    }
                }

            } else if (direction === 'left') {
                if (jumpInterval === 0) {
                    continue;
                }

                if (jumpInterval < 0) {
                    jumpInterval = Math.abs(jumpInterval);
                    if (field[ladyBugAtIndex + jumpInterval] === 0) {
                        [field[ladyBugAtIndex], field[ladyBugAtIndex + jumpInterval]] = [field[ladyBugAtIndex + jumpInterval], field[ladyBugAtIndex]];
                    }

                    while (field[ladyBugAtIndex + jumpInterval] != 0) {
                        jumpInterval *= 2;
                        if (field[ladyBugAtIndex + jumpInterval] === 0) {
                            [field[ladyBugAtIndex], field[ladyBugAtIndex + jumpInterval]] = [field[ladyBugAtIndex + jumpInterval], field[ladyBugAtIndex]];
                        } else if (field[ladyBugAtIndex + jumpInterval] !== (1 || 0) || field[ladyBugAtIndex + jumpInterval] < 0) {
                            field[ladyBugAtIndex] = 0;
                            break;
                        }
                    }
                }

                if (field[ladyBugAtIndex - jumpInterval] === 0) {
                    [field[ladyBugAtIndex], field[ladyBugAtIndex - jumpInterval]] = [field[ladyBugAtIndex - jumpInterval], field[ladyBugAtIndex]];
                }

                while (field[ladyBugAtIndex - jumpInterval] !== 0) {
                    jumpInterval *= 2;
                    if (field[ladyBugAtIndex - jumpInterval] === 0) {
                        [field[ladyBugAtIndex], field[ladyBugAtIndex - jumpInterval]] = [field[ladyBugAtIndex - jumpInterval], field[ladyBugAtIndex]];
                    } else if (field[ladyBugAtIndex - jumpInterval] !== (1 || 0) || field[ladyBugAtIndex - jumpInterval] < 0) {
                        field[ladyBugAtIndex] = 0;
                        break;
                    }
                }
            }
        }
    }

    console.log(field.join(' '));
}