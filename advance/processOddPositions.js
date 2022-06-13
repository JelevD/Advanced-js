function processOddPositions(num) {
    let result = [];
    
    for (let i = 0; i < num.length; i++) {
        if (i % 2 != 0) {

            result.push(num[i]);
        }
    }
    return result.map(a => a * 2).reverse()
    
}
processOddPositions([10, 15, 20, 25]);