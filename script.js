// Locate: Botão que adiciona itens na lista
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
// Location: Botão de mover item da lista para cima
const moverCimaButton = document.getElementById('mover-cima');
// Location: Botão de mover item da lista para baixo
const moverBaixoButton = document.getElementById('mover-baixo');
// Location: Botão de remover item selecionado
const removeSelecionadoButton = document.getElementById('remover-selecionado');
// Location: body
const body = document.querySelector('body');

// Pega o valor do input e adiciona à lista ao clicar no botão para adicinar uma nova tarefa
createTaskButton.addEventListener ('click', function () {
    let valueInputTask = inputTask.value;
    inputTask.value = '';
    let li = document.createElement('li');
    li.innerText = valueInputTask;
    li.classList.add('no-highlight');
    taskList.appendChild(li);
});

// Aciona o botão "Criar tarefa" quando pressionar Enter
inputTask.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        createTaskButton.click();
    }
});

// Define o background-color do item da lista como cinza ao clicar
taskList.addEventListener ('click', (element) => {
 
    let taskListChilden = document.getElementById('lista-tarefas').children;
    if (element.target.tagName === "LI") {
        if (document.querySelector('.selected')) {
            // document.querySelector('.selected').style.removeProperty("background-color");
            document.querySelector('.selected').classList.remove('selected');
        }
        // element.target.style.backgroundColor = "rgb(128, 128, 128)";
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
// Salva a lista em localStorage
salvaTarefasButton.addEventListener('click', function () {
    let element = document.querySelector('.selected');
    if (element) {
        element.classList.remove('selected');
    }
    let taskLists = taskList.innerHTML;
    window.localStorage.setItem('myTaskList',JSON.stringify(taskLists));
});
// Puxa a lista salva em localStorage e aplica no html
taskList.innerHTML = JSON.parse(window.localStorage.getItem('myTaskList'));

// Move Elemento selecionado para cima
moverCimaButton.addEventListener('click', function () {
    let element = document.querySelector('.selected');
    if (element) {
        let backgroundColorElementValue = window.getComputedStyle(element).getPropertyValue('background-color');
        if (element.previousElementSibling && backgroundColorElementValue === "rgb(128, 128, 128)") {
            element.parentNode.insertBefore(element, element.previousElementSibling);
        }
    }
});
// Move elemento selecionado para baixo
moverBaixoButton.addEventListener('click', function () {
    let element = document.querySelector('.selected');
    if (element) {
        let backgroundColorElementValue = window.getComputedStyle(element).getPropertyValue('background-color');
        if (element.nextElementSibling && backgroundColorElementValue === "rgb(128, 128, 128)") {
            element.parentNode.insertBefore(element.nextElementSibling, element);
        }
    }
});

// Remove elemento selecionado
removeSelecionadoButton.addEventListener('click', function () {
    let element = document.querySelector('.selected');
    if (element) {
        element.remove();
    }
});

// Ao clicar fora do elemento Li o elemento selecionado perde a seleção
body.addEventListener('click', function (element) {
    if (element.target.tagName !== 'LI' && element.target.id !== "mover-cima" && element.target.id !== "mover-baixo") {
        if(document.querySelector('.selected')) {
            document.querySelector('.selected').classList.remove('selected');
        }
    }
});