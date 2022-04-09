const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const conectado = mongoose.connect('mongodb://localhost:27017/teste-cliente',
    { useMongoClient: true }, 
    error => {
    if(error){
        return console.log('Ocorreu erro ao conectar no DB: ', error);
    }
    console.log('Conectado ao banco de dados');
});
module.exports = conectado;