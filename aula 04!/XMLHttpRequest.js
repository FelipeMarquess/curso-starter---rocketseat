let ajax = new XMLHttpRequest();

ajax.open('GET', 'https://api.github.com/users/FelipeMarquess');
ajax.send(null);

ajax.onreadystatechange = function(){ //função dispara toda vida que o readyState mudar!
    if (ajax.readyState === 4){ //Ready state são as "fases" de carregamento do documento. 4 é quando o documento está totalmente carregado é a mesma coisa que "DONE"!
        console.log(JSON.parse(ajax.responseText)); //respondeText são os dados de resposta da requisição em formato JSON! 
    }
}