let inputButton = window.document.querySelector('#btn');
let res = document.getElementById('res');

inputButton.addEventListener('click', adicionar)

function adicionar(){
    let quadrado = document.createElement('div'); //Criei um elemento DIV!
    
    //atribuindo CSS em elementos via JS!
    quadrado.style.height = '100px';
    quadrado.style.width = '100px';
    quadrado.style.backgroundColor = '#f00';
    quadrado.style.marginLeft = '2px';
    quadrado.style.display = 'inline-block';
    quadrado.style.marginTop = '2px';
    quadrado.onmouseover = function(){ //Adiciona a cada elemento criado via JS o evento 'mouseover', que irá disparar a função nele atribuida!
        quadrado.style.backgroundColor = getRandomColor()
    };

    res.appendChild(quadrado); //Adicionando o elemento que foi criado via JS dentro de outro elemento HTML!
}

function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
   }