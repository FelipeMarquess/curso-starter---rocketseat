let endereco = {
    rua: 'Rua dos pinheiros',
    numero: 1293,
    bairro: 'Centro',
    cidade: 'São Paulo',
    uf: 'SP'
};

function exibeResultado(ender){
    return `O usuário mora em ${ender.cidade}/${ender.uf}, no bairro ${ender.bairro}, na rua ${ender.rua} com nº ${ender.numero}.`;
}

let resu = exibeResultado(endereco) //chamei a função passando o parametro endereco que é meu objeto.

console.log(resu);