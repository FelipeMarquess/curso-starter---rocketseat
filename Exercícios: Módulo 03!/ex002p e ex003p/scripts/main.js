let txt = document.getElementById('texto');
let btn = document.querySelector('#btn');
let container = document.getElementById('container');

btn.onclick = () => {
    carregando();
    promessa()
    .then(function(repositorios){
        container.innerHTML = '';
        let lista = document.createElement('ul');
        for(let pos in repositorios){
            let item = document.createElement('li');
            let txt = document.createTextNode(`${repositorios[pos].name}`)
            item.appendChild(txt);
            lista.appendChild(item);
            container.appendChild(lista);
        }
    })
    .catch(function(erro){
        window.alert(erro);
    })
}

function carregando(){
    container.innerHTML = '';
    let lista2 = document.createElement('ul');
    let item2 = document.createElement('li');
    item2.innerHTML = 'Carregando...';
    lista2.appendChild(item2);
    container.appendChild(lista2);
}

function promessa(){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `https://api.github.com/users/${txt.value}/repos`)
        xhr.send(null);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else if (xhr.status === 404) {
                    reject('Erro [404] ao encontrar o usúario!');
                }
            }
        }
    })
}