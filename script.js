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
});

// Define o background-color do item da lista como cinza ao clicar
taskList.addEventListener ('click', (element) => {
 
    let taskListChilden = document.getElementById('lista-tarefas').children;
    if (element.target.tagName === "LI") {
        for (let index = 0; index < taskListChilden.length; index++) {
            let listItem = taskListChilden[index];
            if (listItem.classList.contains('selected')) {
                listItem.style.removeProperty("background-color");
                listItem.classList.remove('selected');
            }
        }
        
        element.target.style.backgroundColor = "rgb(128, 128, 128)";
        element.target.classList.add('selected');
    }      
        
    
});

// Risca o item da lista ou tira o risco se já estiver riscada
taskList.addEventListener ('dblclick', function (element) {
    element.target.classList.toggle('completed');
});