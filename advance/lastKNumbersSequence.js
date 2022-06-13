function lastKNumbersSequence(count, num) {
    
    let result = [1];
    for (let i = 1; i < count; i++) {
        curentNum = result.slice(-num)
        let sum =+ curentNum.reduce((a, b) => a + b, 0);
        result.push(sum)
        
    }
    console.log(result.join(" "))
}
lastKNumbersSequence(8, 2)