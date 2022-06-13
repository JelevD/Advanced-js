function fruits(fruit, weight, price) {

    const monetNeeded = (weight / 1000) * price;
    const weightKg = weight / 1000
    console.log(`I need $${monetNeeded.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`)
}
fruits('orange', 2500, 1.80);