const restful = require('node-restful');
const Schema = restful.mongoose.Schema;

const AtividadesSchema = new Schema({
    descricao : {type : String, required : true},
    duracao : {type : Number, required : true},
});

const FuncionarioSchema = new Schema({
    nome : {type : String, required : true},
    cargo : {type : String, required : true},
    avaliacao : {type : Number, default : 0, min: 0, max : 5},
    atividades : [AtividadesSchema]
});

const model = restful.model('funcionarios', FuncionarioSchema);
exports.model = model;