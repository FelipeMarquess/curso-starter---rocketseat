var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function exibeHabilidades(user){
    for(let c of user){ //o 'for..of' diferente do 'for...in' atribui a várivel criada o valor que está na posição. já o for in, adicinoar o valor da posição do elemento.
        console.log(`O ${c.nome} possui as habilidades: ${c.habilidades.join(', ')}.`);
    }
}

//o join serve para unir vetores/arrays.

exibeHabilidades(usuarios);
