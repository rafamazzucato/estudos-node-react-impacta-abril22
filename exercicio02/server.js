const http = require('http');

const tratarRequisicoes = (_, res) => {
    res.writeHead(200, { "Content-Type" : "text/html"});
    res.write("<h1>Meu primeiro servidor HTTP em Node.js</h1>");
    res.end();
}

const server = http.createServer(tratarRequisicoes);
server.listen(3000, () => console.log('Servidor no ar na porta 3000'));