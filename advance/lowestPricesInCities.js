function lowestPricesInCities(arr) {
    const catalog = new Map();
    const result = []

    arr.forEach(line => {
        let [town, product, price] = line.split(' | ');

        if(catalog.has(product) == false){
            catalog.set(product, new Map());
        } 

        catalog.get(product).set(town, Number(price));
    });

    for(let [key, value] of catalog){
        const lowest = [...value].reduce((acc, cur) => {
            if(acc[1] < cur[1]){
                return acc;
            } else if(acc[1] > cur[1]){
                return cur;
            }

            return acc;
        })

        result.push(`${key} -> ${lowest[1]} (${lowest[0]})`);
    }

    return result.join('\n');

}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);