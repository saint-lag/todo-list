// Create item
const savedItems = JSON.parse(localStorage.getItem('savedItems'));
const createButton = document.getElementById('criar-tarefa');
const itemList = document.getElementById('lista-tarefas');
const item = document.createElement('li');

if (localStorage.getItem('sessionInitiated') === 'true') {
  for (let savedItem of savedItems) {
    itemList.appendChild(savedItem.cloneNode(true));
  }
} else {
  localStorage.setItem('sessionInitiated', JSON.stringify(true));
  localStorage.setItem('savedItems', JSON.stringify([]));
}

createButton.addEventListener('click', function () {
  item.style.listStyle = 'none';
  item.style.lineHeight = '20px';
  item.innerText = document.getElementById('texto-tarefa').value;
  itemList.appendChild(item.cloneNode(true));
  savedItems.push(item.innerHTML);
});
