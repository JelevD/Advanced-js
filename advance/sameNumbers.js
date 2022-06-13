function sameNumbers(num) {
    const str = num.toString()
    let result = Number(str[0]);
    let isSsame = true;
    for (let i = 1; i < str.length;i++) {
        result += Number(str[i]);
        
        if (str[i] != str[i-1]) {
            isSsame = false;
        }
    }
    console.log(isSsame);
    console.log(result)
}
sameNumbers(2222222);
sameNumbers(12345)