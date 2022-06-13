function cookingbByNumbers(num, op1, op2, op3, op4, op5) {
    let chop = function (num) {
        return num / 2;
    }

    let dice = function(num) {
        return Math.sqrt(num);
    }
    
    let spice = function(num) {
        return num + 1;
    }
    
    let bake = function(num) {
        return num * 3;
    }

    let fillet = function (num) {
        return num - (num * 0.2);
    }

    let arr = [op1, op2, op3, op4, op5];
    let result = num;
    for(let i = 0; i < arr.length; i++)
    if ( arr[i] == "chop") {
        result = chop(result);
        console.log(result);
    }else if ( arr[i] == "dice") {
        result = dice(result);
        console.log(result);
    }else if ( arr[i] == "spice") {
        result = spice(result);
        console.log(result);
    }else if ( arr[i] == "bake") {
        result = bake(result);
        console.log(result);
    }else if ( arr[i] == "fillet") {
        result = fillet(result);
        console.log(result);
    }
}
cookingbByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingbByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');