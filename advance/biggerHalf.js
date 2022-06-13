function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    const midlle = Number(arr.length / 2);
    const total = arr.slice(midlle);
    return total
}
biggerHalf([4, 7, 2, 5])