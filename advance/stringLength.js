function stringLength(str1, str2, str3) {
    let arr1 = str1.length;
    let arr2 = str2.length;
    let arr3 = str3.length;
    let result = arr1 + arr2 + arr3
    console.log(result);
    console.log(Math.floor(result/3))
}
stringLength('chocolate', 'ice cream', 'cake');