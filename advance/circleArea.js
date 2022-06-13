function circleArea(input) {
    let typeInput = typeof(input);
    let result = Math.pow(input, 2) * Math.PI
    
    if (typeInput === "number") {
        console.log(result.toFixed(2));
    }else {
        console.log(`We can not calculate the circle area, because we receive a ${typeInput}.`);
    }
}
circleArea('name');
