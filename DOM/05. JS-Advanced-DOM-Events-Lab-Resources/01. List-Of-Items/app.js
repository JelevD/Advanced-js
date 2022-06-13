function addItem() {
    const input = document.getElementById('newItemText');

    const liEl = document.createElement('li');

    liEl.textContent = input.value;

    document.getElementById('items').appendChild(liEl);

    input.value = " ";
}