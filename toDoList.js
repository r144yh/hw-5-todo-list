'use strict';

function newItem() {
    var item = document.getElementById('elementToDo').value;
    var ul = document.getElementById('toDoList');
    var li = document.createElement('li');
    var checkButton = document.createElement('INPUT');
    var removeButton = document.createElement('button');

    checkButton.setAttribute('type', 'checkbox');
    removeButton.textContent = 'Don\'t do it \u2716';
    removeButton.classList.add('removeItem');

    if (item.length === 0 || !item.trim()) {
        return;
    }

    li.appendChild(checkButton);
    li.appendChild(document.createTextNode(item));
    li.appendChild(removeButton);
    ul.appendChild(li);


    document.getElementById('elementToDo').value = '';

    li.lastChild.onclick = function () {
        li.remove();
    };

    li.firstChild.addEventListener('click', function () {
        if (checkButton.checked === true) {
            return li.style.textDecoration = 'line-through';
        }
        li.style.textDecoration = 'none';
    });
}

document.body.addEventListener('keydown', function (event) {
    if (event.code === "Enter") {
        newItem();
    }
});


