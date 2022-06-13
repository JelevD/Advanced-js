function storeCatalogue(arr) {
    const catalogue = {};
    const result = [];

    arr.forEach(line => {
        let [product, price] = line.split(' : ');

        if(catalogue.hasOwnProperty(product[0]) == false){
            catalogue[product[0]] = [];
        }

        catalogue[product[0]].push([product, Number(price)]);
    });

    Object
    .entries(catalogue)
    .sort((a,b) => a[0].localeCompare(b[0]))
    .forEach(element => {
        result.push(element[0]);
        result.push(element[1].sort((a,b)=> a[0].localeCompare(b[0])).map(x => `  ${x.join(': ')}`).join('\n'));
    })

    return result.join('\n');
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);