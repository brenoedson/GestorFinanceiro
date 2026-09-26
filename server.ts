import { createServer } from 'node:http';

createServer(function (request, response) {
    if (request.url === '/api/healph'){
        response.writeHead(
            200,{'content-type': 'application/json'}
        );
        response.end(JSON.stringify( {status: 'ok'}));
        return;
    }
    
    // Caso não receba a resposta acima, receber a mensagem de erro 404
    response.writeHead(
        404,{'content-type': 'application/json'}
    );
    response.end(JSON.stringify({ message: 'Recurso não encontrado.'}))
}).listen(3000);