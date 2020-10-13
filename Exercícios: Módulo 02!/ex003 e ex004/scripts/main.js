let list = document.querySelector('#lista');
let botao = document.getElementById('btn');
let nomes = ["Diego", "Gabriel", "Lucas"];

for (let pos in nomes){
    let itemList = document.createElement('li');
    let text = document.createTextNode(`${nomes[pos]}`);
    itemList.appendChild(text);
    list.appendChild(itemList);
}

botao.addEventListener('click', adicionar);

function adicionar(){
    let txt = document.getElementById('txt');
    let itemList = document.createElement('li');
    itemList.innerText = `${txt.value}`;
    list.appendChild(itemList);
    txt.focus();
    txt.value = '';
}