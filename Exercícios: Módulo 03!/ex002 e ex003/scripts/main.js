let txt = document.querySelector('#texto');
let btn = document.getElementById('btn');
let container = document.getElementById('container');

btn.onclick = function renderRepos(){
    carregando();
    carregaRepos();
}

function carregando(){
    container.innerHTML = '';
    let lista2 = document.createElement('ul');
    let item2 = document.createElement('li');
    item2.innerHTML = 'Carregando...'
    lista2.appendChild(item2);
    container.appendChild(lista2);
}

function carregaRepos(){
        if(txt.value.length === 0){
        alert('Digite algum usuário!');
    } else {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/users/${txt.value}/repos`);
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 ){ /*mesma coisa que xhr.DONE, significa que toda a requisição foi processada e os dados solicitados estão prontos para uso.*/
                container.innerHTML = '';
                if(xhr.status === 200){
                    let lista = document.createElement('ul');
                    let resp = JSON.parse(xhr.responseText);
                    for(let pos in resp){
                        let item = document.createElement('li');
                        item.innerHTML = resp[pos].name
                        lista.appendChild(item);
                        container.appendChild(lista);
                    }
                } else if(xhr.status === 404) {
                    window.alert('Usuário NÃO EXISTE!');
                }
            }
        }
    }
    txt.value = '';
    txt.focus();
}