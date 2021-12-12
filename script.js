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

// Define com a cor cinza do background color do item da lista ao clicar
taskList.addEventListener ('click', function (element){
    let taskListChilden = document.getElementById('lista-tarefas').children;
    if (element.target.tagName === "LI") {
        // console.log(taskListChilden)
        for (let index = 0; index < taskListChilden.length; index++) {
            let listItem = taskListChilden[index];
            if (listItem.classList.contains('selected')) {
                console.log(listItem);
                listItem.style.removeProperty("background-color");
                listItem.classList.remove('selected');
            }
        }

        element.target.style.backgroundColor = "rgb(128, 128, 128)";
        element.target.classList.add('selected');
        // console.log(element.target)
    }
});

