function townPopulation(arr) {
    const towns = {};
    for (const data of arr) {
        const [city, population] = data.split(" <-> ");
        const name = city;
        const pop = Number(population);

        if (towns[name] == undefined) {
            towns[name] = pop;
        }else {
            towns[name] += pop
        }
    }
    for (const name in towns) {
        console.log(`${name} : ${towns[name]}`)
    }
    

}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)