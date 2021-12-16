const createButton = document.getElementById('criar-tarefa');
const itemList = document.getElementById('lista-tarefas');
const item = document.createElement('li');
sessionStorage.setItem('selected', 'false');

// Welcome!

if (typeof localStorage.sessionInitiated === 'undefined') {
  console.log('Session Initiated!');
  localStorage.setItem('sessionInitiated', JSON.stringify(true));
  localStorage.setItem('savedItems', JSON.stringify([]));
  var items = document.querySelectorAll('.item');
  var savedItems = [];
} else {
  console.log('Welcome, back!');
  savedItems = JSON.parse(localStorage.savedItems);

  for (let index = 0; index < itemList.children.length; index += 1) {
    itemList.removeChild(firstChild);
  }

  for (let savedItem of savedItems) {
    item.style.listStyle = 'none';
    item.style.lineHeight = '20px';
    item.className = 'item';
    item.innerText = savedItem.text;
    itemList.appendChild(item.cloneNode(true));
    var items = document.querySelectorAll('.item');
    taskManager();
    selectItem();
  }
}

// Saving Feature

const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', function () {
  localStorage.savedItems = JSON.stringify(savedItems);
  items = document.querySelectorAll('.item');
  if (savedItems.length === 0) {
    console.log('Empty list saved...');
  } else {
    console.log('Saved Items: ' + savedItems);
  }
});

// Create Button: Creates Elements of List

createButton.addEventListener('click', function () {
  if (document.getElementById('texto-tarefa').value !== '') {
    // Creates List Item
    item.style.listStyle = 'none';
    item.style.lineHeight = '20px';
    item.className = 'item';
    item.innerText = document.getElementById('texto-tarefa').value;
    itemList.appendChild(item.cloneNode(true));

    // Reassigns Value to Items
    items = document.querySelectorAll('.item');

    // Creates Object
    let itemKey = new Object();
    itemKey.text = item.innerHTML;
    itemKey.isConcluded = false;

    // Saving Items to LocalStorage
    savedItems.push(itemKey);

    // Clear input value
    document.querySelector('#texto-tarefa').value = '';

    // Creates addEventListener and Selected Item function
    taskManager();
    selectItem();
  }
});

// Completed Tasks - Not Working - Required

function taskManager() {
  let isConcluded = false;
  var items = document.querySelectorAll('.item');

  if (document.querySelectorAll('.item') !== 'undefined') {
    items.forEach((item) => {
      item.addEventListener('dblclick', function (event) {
        if (isConcluded === false) {
          isConcluded = true;
          console.log(isConcluded);
          event.target.className += ' completed';

          indexOfItem = Array.prototype.indexOf.call(
            itemList.children,
            event.target
          );
          savedItems[indexOfItem].isConcluded = true;
        } else {
          isConcluded = false;
          console.log(isConcluded);
          event.target.classList.remove('completed');

          indexOfItem = Array.prototype.indexOf.call(
            itemList.children,
            event.target
          );
          savedItems[indexOfItem].isConcluded = false;
        }
      });
    });
  }
}

// Selected List Item - Not Working

function selectItem() {
  let isSelected = false;
  var selectLimitExceeded = JSON.parse(sessionStorage.getItem('selected'));
  var items = document.querySelectorAll('.item');

  if (items !== 'undefined') {
    items.forEach((item) => {
      item.addEventListener('click', function (event) {
        if (isSelected === false && selectLimitExceeded === false) {
          event.target.className += ' selected';

          sessionStorage.selected = 'true';
          isSelected = true;
        } else if (isSelected === false && selectLimitExceeded === true) {
          console.log('Selected Limit is exceeded...');
        } else if (isSelected === true) {
          event.target.classList.remove('selected');

          sessionStorage.selected = 'false';
          isSelected = false;
        }
      });
    });
  }
}

// Remove Concluded Tasks

const completedTasks = document.getElementsByClassName('completed');
const removeButton = document.getElementById('remover-finalizados');

removeButton.addEventListener('click', function () {
  while (completedTasks[0]) {
    itemList.removeChild(completedTasks[0]);
  }
  console.log(itemList.children.length);
  let tempList = [];
  for (let index = 0; index < itemList.children.length; index += 1) {
    let itemKey = new Object();
    itemKey.text = itemList.children[index].innerText;
    itemKey.isConcluded = false;

    tempList.push(itemKey);
  }
  savedItems = tempList;
});

// Clear All

const clearButton = document.getElementById('apaga-tudo');

clearButton.addEventListener('click', function () {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
    savedItems = [];
    console.log('List is Empty');
  }
});
