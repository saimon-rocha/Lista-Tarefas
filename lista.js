let campo = document.getElementById('campo');
let formulario = document.getElementById('formulario');
let lista = document.getElementById('lista');
let tarefas = [];

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    let tarefa = campo.value;
    if (tarefa) {
        let item = document.createElement('li');
        item.innerHTML = tarefa;
        lista.appendChild(item);
        campo.value = '';
        tarefas.push(tarefa);
        localStorage.setItem('tarefas', JSON.stringify(tarefas)); // Armazena as tarefas no localStorage
    }
});

window.addEventListener('load', function () {
    let tarefasSalvas = localStorage.getItem('tarefas'); // Recupera as tarefas do localStorage
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);
        for (let i = 0; i < tarefas.length; i++) {
            let item = document.createElement('li');
            item.innerHTML = tarefas[i];
            lista.appendChild(item);
        }
    }
});
