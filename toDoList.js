'use strict';
var initToDo = (function () {
    var ul = document.getElementById('toDoList');
    var fullListButton = document.getElementById('fullListBtn');
    var completeFilterButton = document.getElementById('completeBtn');
    var unCompleteFilterButton = document.getElementById('unCompleteBtn');

    function fllLst() {
        var fullList = ul.querySelectorAll('li');
        fullList.forEach(function (el) {
            el.style.display = "list-item";
        })
    }

    function eventListener() {
        document.body.addEventListener('keydown', function (event) {
            if (event.code === "Enter") {
                newItem();
            }
        });

        fullListButton.addEventListener('click', function () {
            fllLst();
        });

        completeFilterButton.addEventListener('click', function () {
            fllLst();
            var completeFilter = ul.querySelectorAll('li.noCheckItem');
            completeFilter.forEach(function (el) {
                el.style.display = "none";
            })
        });

        unCompleteFilterButton.addEventListener('click', function () {
            fllLst();
            var unCompleteFilter = ul.querySelectorAll('li.completeItem');
            unCompleteFilter.forEach(function (el) {
                el.style.display = "none";
            })
        });
    }

    function newItem() {
        var item = document.getElementById('elementToDo').value;
        var deadlineTime = document.getElementById('deadlineDo').value;

        var li = document.createElement('li');
        var checkButton = document.createElement('INPUT');
        var removeButton = document.createElement('button');

        var textItem = document.createTextNode(item);
        var dateItem = document.createTextNode(deadlineTime);

        li.classList.add('noCheckItem');
        li.id = 'noCheckItem';

        checkButton.setAttribute('type', 'checkbox');
        removeButton.textContent = 'Don\'t do it \u2716';
        removeButton.classList.add('removeItem');

        if (item.length === 0 || !item.trim()) {
            return alert('Add text and then click Enter');
        }

        li.appendChild(checkButton);
        li.appendChild(textItem);
        li.appendChild(dateItem);
        li.appendChild(removeButton);
        ul.appendChild(li);

        document.getElementById('elementToDo').value = '';
        document.getElementById('deadlineDo').value = '';

        li.lastChild.onclick = function () {
            li.remove();
        };

        li.firstChild.addEventListener('click', function () {
            if (checkButton.checked === true) {
                li.classList.remove('noCheckItem');
                li.classList.add('completeItem');
                li.id = 'completeItem';
                return li.style.textDecoration = 'line-through';
            }
            li.classList.remove('completeItem');
            li.classList.add('noCheckItem');
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


//
// function deadlineFilter(){
//
// }
//
// function checkedItem(){
//
// }