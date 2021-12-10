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
  for (let savedItem of savedItems) {
    itemList.appendChild(savedItem);
    console.log('Saved Item: ' + itemList);
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

  // Saving Items to LocalStorage
  savedItems.push(item.innerText);
  console.log(savedItems);
  console.log('Item Saved: ' + item.innerText);
  localStorage.savedItems = savedItems;
  console.log(localStorage.savedItems);
});
