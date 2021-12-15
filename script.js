const createButton = document.getElementById('criar-tarefa');
const itemList = document.getElementById('lista-tarefas');
const item = document.createElement('li');

// Session Initiated: Whether browser has visit before
// Saved Items: Variable that receives Saved Local Storage Items

if (
  localStorage.sessionInitiated === 'true' &&
  localStorage.savedItems !== 'undefined'
) {
  console.log('Session: TRUE');
  var savedItems = JSON.parse(localStorage.savedItems);
  console.log(savedItems);
  for (let savedItem of savedItems) {
    item.style.listStyle = 'none';
    item.style.lineHeight = '20px';
    item.className = 'item';
    item.innerText = savedItem.text;
    itemList.appendChild(item.cloneNode(true));
    console.log('Saved Item: ' + itemList);
    var items = document.querySelectorAll('.item');
  }
} else {
  console.log('Session: FALSE');
  localStorage.setItem('sessionInitiated', JSON.stringify(true));
  localStorage.setItem('savedItems', JSON.stringify([]));
  var savedItems = [];
}

// Create Button: Creates Elements of List

createButton.addEventListener('click', function () {
  item.style.listStyle = 'none';
  item.style.lineHeight = '20px';
  item.className = 'item';
  item.innerText = document.getElementById('texto-tarefa').value;
  itemList.appendChild(item.cloneNode(true));

  items = document.querySelectorAll('.item');

  // Saving Items to LocalStorage --- OBJECT
  let itemKey = new Object();
  itemKey.text = item.innerHTML;
  itemKey.isConcluded = false;

  savedItems.push(itemKey);
  localStorage.savedItems = JSON.stringify(savedItems);
  console.log('Saved Items: ' + savedItems);
});

// Completed Tasks

let isConcluded = false;

if (document.querySelectorAll('.item') != 'undefined') {
  document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('dblclick', function (event) {
      if (isConcluded === false) {
        isConcluded = true;
        console.log(isConcluded);
        event.target.className += ' completed';
        event.target.style.textDecoration = 'line-through';
      } else {
        isConcluded = false;
        console.log(isConcluded);
        event.target.style.textDecoration = 'none';
        event.target.classList.remove('completed');
      }
    });
  });
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
  localStorage.savedItems = JSON.stringify(savedItems);
});

// Clear All

const clearButton = document.getElementById('apaga-tudo');

clearButton.addEventListener('click', function () {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
    localStorage.savedItems = '[]';
    savedItems = JSON.parse(localStorage.savedItems);
    console.log('List is Empty');
  }
});
