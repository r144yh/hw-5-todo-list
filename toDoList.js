'use strict';
var initToDo = (function () {
    var ul = document.getElementById('toDoList');

    function eventListener() {
        document.body.addEventListener('keydown', function (event) {
            if (event.code === "Enter") {
                newItem();
            }
        });
    }

    function newItem() {
        var item = document.getElementById('elementToDo').value;
        var li = document.createElement('li');
        var textItem = document.createTextNode(item);
        var checkButton = document.createElement('INPUT');
        var removeButton = document.createElement('button');

        checkButton.setAttribute('type', 'checkbox');
        removeButton.textContent = 'Don\'t do it \u2716';
        removeButton.classList.add('removeItem');

        if (item.length === 0 || !item.trim()) {
            return alert('Add text and then click Enter');
        }

        li.appendChild(checkButton);
        li.appendChild(textItem);
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

    return {
        init: function () {
            eventListener();
        }
    }
})();

initToDo.init();


// function filterItem() {
//
// }
//
// function deadlineFilter(){
//
// }
//
// function checkedItem(){
//
// }