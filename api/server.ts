import express from 'express';
import invoiceRouter from './invoice.route.ts';

const app = express();

app.get('/api/healph', (_request, response) => {
  response.status(200).json({ status: 'ok' });
});

app.use('/api/invoices', invoiceRouter);

app.use((_request, response) => {
  response.status(404).json({
    error: {
      status: 404,
      message: 'Recurso não encontrado.'
    }
  });
});

app.listen(3000);

// createServer(function (request, response) {
//     if (request.url === '/api/healph'){
//         response.writeHead(
//             200,{'content-type': 'application/json'}
//         );
//         response.end(JSON.stringify( {status: 'ok'}));
//         return;
//     }

//     if (request.url === '/api/invoices'){
//         response.writeHead(
//             200,{'content-type': 'application/json'}
//         );
//         response.end(JSON.stringify( invoices));
//         return;
//     }

//     // Caso não receba a resposta acima, receber a mensagem de erro 404
//     response.writeHead(
//         404,{'content-type': 'application/json'}
//     );
//     response.end(JSON.stringify({ message: 'Recurso não encontrado.'}))
// }).listen(3000);
