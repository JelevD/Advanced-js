window.addEventListener('load', solve);

function solve() {
    let inputEls = document.querySelector('form').querySelectorAll('input');
    let input = {
        genre: inputEls[0],
        name: inputEls[1],
        author: inputEls[2],
        date: inputEls[3],
    };
    let addBtn = document.querySelector('#add-btn');
    addBtn.addEventListener('click', addSong);

    let addedSongsElement = document.querySelectorAll('.all-hits-container')[0];
    let savedSongs = document.querySelectorAll('.saved-container')[0]; 
    let pLikesCountElement = document.querySelectorAll('.likes')[0].querySelector('p');

    function addSong(e){
        e.preventDefault();
        if (input.name.value == '' || input.genre.value == ''|| input.author.value == '' || input.date.value == '') {
            return;
        }
        let divEl = createElement('div', '', 'hits-info');

        let imageElement = document.createElement('img');
        imageElement.setAttribute('src', './static/img/img.png');

        let h2Genre = createElement('h2', 'Genre: ' + input.genre.value);
        let h2Name = createElement('h2', 'Name: ' + input.name.value);
        let h2Author = createElement('h2', 'Author: ' + input.author.value);
        let h3Date = createElement('h3', 'Date: ' + input.date.value);

        let saveButton = createElement('button', 'Save song', 'save-btn');
        let likeButton = createElement('button', 'Like song', 'like-btn');
        let deleteButton = createElement('button', 'Delete', 'delete-btn');

        divEl.appendChild(imageElement);
        divEl.appendChild(h2Genre);
        divEl.appendChild(h2Name);
        divEl.appendChild(h2Author);
        divEl.appendChild(h3Date);
        divEl.appendChild(saveButton);
        divEl.appendChild(likeButton);
        divEl.appendChild(deleteButton);

        addedSongsElement.appendChild(divEl);

        input.name.value = '';
        input.author.value  = '';
        input.genre.value  = '';
        input.date.value  = '';

        deleteButton.addEventListener('click', deleteSong);
        likeButton.addEventListener('click', increaseLikes);
        saveButton.addEventListener('click', saveSong);
    }
    function saveSong(e){
        let elementToMove = e.currentTarget.parentElement;
        savedSongs.appendChild(elementToMove);
        let buttons = elementToMove.querySelectorAll('button');
        let saveButton =buttons[0];
        let likeButton =buttons[1];
        saveButton.remove();
        likeButton.remove();
    }
    function increaseLikes(e){
        let pInfo = pLikesCountElement.textContent.split(' ');
        let count = Number(pInfo[2]);
        count++;
        pLikesCountElement.textContent = `Total Likes: ${count}`;
        let button = e.currentTarget;
        button.setAttribute('disabled', '');
    }
    function deleteSong(e){
        let parentElement = e.currentTarget.parentElement;
        parentElement.remove();
    }
    function createElement(tagName, content, className){
        let element = document.createElement(tagName);
        element.textContent = content;
        if(className){
              element.classList.add(className);
           }
        return element;
     }
}