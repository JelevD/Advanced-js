function list(arr) {
    let result = arr.sort((a, b) => a.localeCompare(b)).map((el, index) => {
        let result = `${index+1}.${el}`;
        return result;
    });
    
    return result.join('\n');
}
list(["John", "Bob", "Christina", "Ema"])