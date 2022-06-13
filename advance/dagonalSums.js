function dagonalSums(arr) {
    let firstSum = 0;
    let secondSum =0;
    for(let i = 0; i < arr.length; i++) {
        firstSum += arr[i][i];
        secondSum += arr[i][arr.length - i - 1];
    }
    return [firstSum, secondSum].join(" ");
}
dagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )