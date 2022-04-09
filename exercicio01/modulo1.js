const mensagem = function(){
    console.log('Meu terceiro modulo Node.js');
}

const funcao = function(){
    console.log('Meu primeiro modulo Node.js');
}

var modulo = {
    mensagem,
    funcao
}

module.exports = modulo;