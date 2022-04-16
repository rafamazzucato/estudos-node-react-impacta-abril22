const nodeRestful = require('node-restful');
const Schema = nodeRestful.mongoose.Schema;

const contatoSchema = new Schema({
    id: { type: Number, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    celular: { type: String },
    imagem: { type: String }
});

module.exports = nodeRestful.model('contatos', contatoSchema);