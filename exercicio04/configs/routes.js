const express = require('express');

// - localhost:3200/api/funcionarios (GET, POST, PUT, DELETE)

exports.routes = function(server){
    const router = express.Router();
    server.use('/api', router);

    const { clienteService } = require('../services/clientes/service');
    clienteService.register(router, '/clientes');

    const { funcionarioService } = require('../services/funcionario/service');
    funcionarioService.register(router, '/funcionarios');

    const { login, cadastro } = require('../services/login/service');
    router.post('/login', login);
    router.post('/cadastro', cadastro);
}