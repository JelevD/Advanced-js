function heroicInventory(input) {
    const result = [];
    for (let line of input) {
        let [heroName, heroLevel, ...items] = line.split(" / ");
        heroLevel = Number(heroLevel);
        items = items.join(" ") ? items.join(" ").split(", ") : [];
       
        result.push({
            name : heroName,
            level : heroLevel,
            items : items
        });
    }
    console.log(JSON.stringify(result))
    

}
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
