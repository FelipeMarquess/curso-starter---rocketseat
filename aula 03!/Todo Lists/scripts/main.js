let text = document.querySelector('input#text');
let btn = document.getElementById('btn');
let form = document.getElementById('form');

let todos = JSON.parse(localStorage.getItem('todo_list')) || []; //o metódo JSON.parse() transforma a estrutura JSON string em formato de array novamente.

function renderTodo(){
        form.innerHTML = '';
        for (let pos of todos){
        let item = document.createElement('li');
        let txt1 = document.createTextNode(pos);

        let linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#'); //linkElement.href = '#' - também seria aceito!

        var position = todos.indexOf(pos);
        linkElement.setAttribute('onclick', 'deleteTodo('+ position +')')

        let textElement = document.createTextNode('Excluir');
        linkElement.appendChild(textElement);

        item.appendChild(txt1);
        form.appendChild(item);
        item.appendChild(linkElement);
        localArmazenamento();
    }
}

renderTodo();

btn.addEventListener('click', addTodo)

function addTodo(){
    let todoText = text.value;
    todos.push(todoText);

    text.value = '';
    text.focus();
    renderTodo(); //executa a função em que se usa a posição do array para adicionar os todos.
}

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodo();
    localArmazenamento();
}

function localArmazenamento(){
    localStorage.setItem('todo_list', JSON.stringify(todos));
}
