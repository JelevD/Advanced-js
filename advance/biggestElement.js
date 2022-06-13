function biggestElement(arr) {
    const result = [];
    arr.forEach(el => {
        result.push(Math.max(...el));
    });
    return Math.max(...result)
}
biggestElement([[20, 50, 10],
    [8, 33, 145]]
   );