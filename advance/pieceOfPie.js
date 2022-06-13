function pieceOfPie(arr, tar1, tar2) {
let first = arr.indexOf(tar1);
let second = arr.indexOf(tar2);
let total = arr.slice(first, second + 1);
return total
}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);