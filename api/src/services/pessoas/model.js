const nodeRestful = require('node-restful');
const Schema = nodeRestful.mongoose.Schema;

const pessoaSchema = new Schema({
    id: { type: String, required: true },
    cpf: { type: String, required: true, min: 11, max:11 },
    nome: { type: String },
    idade: { type: Number, min: 0 }
   });

module.exports = nodeRestful.model('pessoas', pessoaSchema);