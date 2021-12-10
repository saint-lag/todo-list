// Create item
const createButton = document.getElementById('criar-tarefa');
const itemList = document.getElementById('lista-tarefas');
const item = document.createElement('li');

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

createButton.addEventListener('click', function () {
  item.style.listStyle = 'none';
  item.style.lineHeight = '20px';
  item.className = 'item';
  item.innerText = document.getElementById('texto-tarefa').value;
  itemList.appendChild(item.cloneNode(true));
  savedItems.push(item);
  console.log('Item Saved: ' + item.innerText);

  localStorage.savedItems = savedItems;
});
