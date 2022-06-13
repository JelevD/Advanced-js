function addAndRemoveElements(arr) {
    let index = 1;
    let result = [];
for (let str of arr) {
    if (str == 'add') {
add()
}else if (str == 'remove') {
    remove()
}
index++;
}
function add() {
    result.push(index);
}
function remove() {
    result.pop();
}
if (result.length == 0) {
    console.log("Empty");
    
}
console.log(result.join("\n"))
}
addAndRemoveElements(['remove', 
'remove', 
'remove']
);