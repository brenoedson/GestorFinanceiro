// import { createServer } from 'node:http';  // Import desnecessário em razão do uso do Express
import express from 'express';

const app = express();

type InvoiceStatus = 'pending'| 'paid';

interface Customer {
    id: number;
    name: string;
    email: string;
}

interface Invoice{
    id: number;
    amount: number;
    status: InvoiceStatus;
    issueDate: string;
    dueDate: string;
    customer: Customer;
}

const invoices: Invoice[] = [{
    id: 1,
    amount: 125000,
    status: 'pending',
    issueDate: '2026-09-03',
    dueDate: '2026-10-04',
    customer: {
        id: 7,
        name: 'Construtora Meridiano',
        email: 'contato@meridiano.com'
    }
},{
    id: 2,
    amount: 35000,
    status: 'paid',
    issueDate: '2026-10-01',
    dueDate: '2026-11-02',
    customer: {
        id: 4,
        name: 'Gráfica Nova',
        email: 'comercial@nova.com'
    }
},{
    id: 3,
    amount: 301000,
    status: 'pending',
    issueDate: '2026-09-10',
    dueDate: '2026-10-05',
    customer: {
        id: 15,
        name: 'Tenditudo',
        email: 'contato@tenditudo.com'
    }
}];

app.get('/api/healph', (request, response) => {
    response.status(200).json({ status: 'ok' });
});

app.get('/api/invoices', (request, response) => {
    response.status(200).json(invoices);
});

app.get('/api/invoices/:id', (request, response) => {
    const id = +request.params.id;
    const invoice = invoices.find(invoice => invoice.id === id);
    if(!invoice) response.status(404).json({ error: { 
        status:  404,
        message: 'Recurso não encontrado.' 
    }});
    response.status(200).json(invoice);
});

app.use((request , response) => {
    response.status(404).json({ error: { 
        status:  404,
        message: 'Recurso não encontrado.' 
    }});
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

