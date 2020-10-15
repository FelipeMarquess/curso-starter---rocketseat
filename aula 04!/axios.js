axios.get('https://api.github.com/users/FelipeMarquess')
.then(function(resolve){
    console.log(resolve);
})
.catch(function(erro){
    console.log(erro);
})