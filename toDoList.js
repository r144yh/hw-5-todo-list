'use strict';
var initToDo = (function () {
    var ul = document.getElementById('toDoList');
    var fullListButton = document.getElementById('fullListBtn');
    var completeFilterButton = document.getElementById('completeBtn');
    var unCompleteFilterButton = document.getElementById('unCompleteBtn');
    var tomorrowFilterButton = document.getElementById('tomorrowBtn');
    var nextWeekFilterButton = document.getElementById('nextWeekBtn');

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

        tomorrowFilterButton.addEventListener('click', function () {
            var deadList = ul.querySelectorAll('li.liDeadTime');
            var today = new Date();
            var tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0);

            deadList.forEach(function (el) {
                if (deadList.getDate() !== tomorrow.getDate()) {
                    el.style.display = "none";
                    console.log(5)
                }
            })
        });
    }

    function newItem() {
        var item = document.getElementById('elementToDo').value;
        var deadlineTime = document.getElementById('deadlineDo').value;

        var li = document.createElement('li');
        var deadSpan = document.createElement('span');
        var checkButton = document.createElement('INPUT');
        var removeButton = document.createElement('button');

        var textItem = document.createTextNode(item);
        var dateItem = document.createTextNode(deadlineTime);

        li.classList.add('noCheckItem');
        li.id = 'noCheckItem';

        deadSpan.className = 'deadTime';
        deadSpan.appendChild(dateItem);
        li.classList.toggle('liDeadTime');

        checkButton.setAttribute('type', 'checkbox');
        removeButton.textContent = '\u2716';
        removeButton.classList.add('Btn');
        removeButton.id = 'removeItem';

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