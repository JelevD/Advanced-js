function solve() {
  const text = document.getElementById('text').value;
  const naiming = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  const splitted = text.split(" ");

  let resultString = "";

  if(naiming =="Camel Case") {
    resultString += splitted[0][0].toLowerCase() + splitted[0].slice(1, splitted[0].length).toLowerCase()
    for (let i = 1; i < splitted.length; i++)
      resultString += splitted[i][0].toUpperCase() + splitted[i].slice(1, splitted[i].length).toLowerCase()
      result.textContent = resultString;
  }else if(naiming == "Pascal Case") {
    resultString += splitted[0][0].toUpperCase() + splitted[0].slice(1, splitted[0].length).toLowerCase()
    for (let i = 1; i < splitted.length; i++)
      resultString += splitted[i][0].toUpperCase() + splitted[i].slice(1, splitted[i].length).toLowerCase()
      result.textContent = resultString;
  }else {
    result.textContent = "Error!"
  }

}