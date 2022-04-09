const mensagem = function(mensagem){
    console.log(mensagem);
}

exports.mensagem3 = mensagem;

exports.mensagem2 = function(){
    mensagem('Meu quarto modulo Node.js');
}