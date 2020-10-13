let skills = ["Javascript", "ReactJS", "React Native"]
let teste = ['oi', 'ola', "Javascrip"]

function temHabilidade(vetor){
    for(let pos in vetor){
        if(vetor.indexOf("Javascript") != -1){
            return console.log(true);
        } else {
            return console.log(false);
        }
    }
}

temHabilidade(skills);
temHabilidade(teste);