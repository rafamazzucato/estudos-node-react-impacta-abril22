const express = require('express');

module.exports = server => {
    const router = express.Router();
    server.use('/api', router);

    const contatoService = require('../services/contato');
    contatoService.register(router, '/contatos');

    const pessoasService = require('../services/pessoas');
    pessoasService.register(router, '/pessoas');
}