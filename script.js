// Locate: botão que adiciona itens na lista
const createTaskButton = document.getElementById('criar-tarefa');
// Locate: input de adição de tarefas
const inputTask = document.getElementById('texto-tarefa');
// Locate: lista de tarefas
const taskList = document.getElementById('lista-tarefas');

// Pega o valor do input e adiciona à lista ao clicar no botão para adicinar uma nova tarefa
createTaskButton.addEventListener ('click', function () {
    let valueInputTask = inputTask.value;
    inputTask.value = '';
    let li = document.createElement('li');
    li.innerText = valueInputTask;
    taskList.appendChild(li);
    console.log(valueInputTask);
});



