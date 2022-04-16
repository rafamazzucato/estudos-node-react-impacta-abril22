const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb+srv://root:root@apirestimpacta.xbwbs.mongodb.net/dbCursos', error => {
    if(error){
        console.log('Erro ao conectar no mongoDB:', error);
        return;
    }
    console.log('Conexao com o banco de dados com sucesso!');
});