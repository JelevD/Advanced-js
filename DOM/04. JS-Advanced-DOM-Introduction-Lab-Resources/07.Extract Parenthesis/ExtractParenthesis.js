function extract(content) {
    const regex = /\((.+?)\)/gm;
    const result = [];
    const element = document.getElementById('content');

    let match = regex.exec(element.textContent);

    while(match != null){
        result.push(match[1]);

        match = regex.exec(element.textContent);
    }

    return result.join('; ')
}