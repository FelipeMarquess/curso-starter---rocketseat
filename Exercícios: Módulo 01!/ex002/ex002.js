function exibeParImpar(numero1, numero2){
    if (numero1 < numero2){ //Quando o primeiro parametro for menor que o segundo.
        while(numero1 <= numero2){
            if(numero1 % 2 === 0){
                console.log(numero1);
            }
            numero1++;
        }
    } else { //Quando o primeiro parametro for maior que o segundo.
        while(numero1 >= numero2){
            if(numero1 % 2 === 0){
                console.log(numero1);
            }
            numero1--;
        }
    }
}

exibeParImpar(300, 200); //chamando a função e passando os parametros 10 e 1.



