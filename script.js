// Locate: botão que adiciona itens na lista
const createTaskButton = document.getElementById('criar-tarefa');
// Locate: input de adição de tarefas
const inputTask = document.getElementById('texto-tarefa');
// Locate: lista de tarefas
const taskList = document.getElementById('lista-tarefas');
// Locate: Botão apaga tudo
const apagaTudoButton = document.getElementById('apaga-tudo');
// Location: Botão apaga finalizados
const apagaFinalizafosButton = document.getElementById('remover-finalizados');
// Location: Botão salva tarefas
const salvaTarefasButton = document.getElementById('salvar-tarefas');

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
        if (document.querySelector('.selected')) {
            document.querySelector('.selected').style.removeProperty("background-color");
            document.querySelector('.selected').classList.remove('selected');
        }
        element.target.style.backgroundColor = "rgb(128, 128, 128)";
        element.target.classList.add('selected');
    }      
});

// Risca o item da lista ou tira o risco se já estiver riscada
taskList.addEventListener ('dblclick', function (element) {
    element.target.classList.toggle('completed');
});

// Remove todos os elementos da lista
apagaTudoButton.addEventListener('click', function () {
    taskList.innerHTML = '';
});
// Remove itens finalizados/riscados
apagaFinalizafosButton.addEventListener('click', function () {
    let completeds = document.getElementsByClassName('completed');
    let completedsLength = completeds.length;
    for (let index = 0; index < completedsLength; index++) {
        taskList.removeChild(completeds[0]);
    }
});

// Botão de ação para salvar lista em localStorage
salvaTarefasButton.addEventListener('click', salvaTarefas);
// Salva a lista em localStorage
function salvaTarefas() {
    let taskLists = taskList.innerHTML;
    window.localStorage.setItem('myTaskList',JSON.stringify(taskLists));
}
// Puxa a lista salva em localStorage e aplica no html
taskList.innerHTML = JSON.parse(window.localStorage.getItem('myTaskList'));

