let anosEstudo = 3;

function experiencia(anos=0){
    if(anos >= 0 && anos <= 1){
        return console.log(`Iniciante`);
    }else if(anos <= 3){
        return console.log('Intermediário');
    }else if(anos <= 6){
        return console.log("Avançado");
    } else {
        return console.log('Jedi Master');
    }
}

experiencia(anosEstudo);