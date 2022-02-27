function isExcellent(x) {
    let isExcellent = {
        true: 'Excellent',
        false: 'Not excellent'
    }
    
    return isExcellent[x >= 5.5];
}