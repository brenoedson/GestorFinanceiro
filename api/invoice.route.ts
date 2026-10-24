import { Router } from 'express';

import { 
    findAllInvoices,
    findInvoiceById
} from './invoice.service.ts';

const router = Router();

router.get('/', (_request, response) => {
  const invoices = findAllInvoices();
  response.status(200).json(invoices);
});

router.get('/:id', (request, response) => {
  const id = Number(request.params.id); 
  const invoice = findInvoiceById(id);

  if (!invoice)
    response.status(404).json({
      error: {
        status: 404,
        message: 'Recurso não encontrado.'
      }
    });
  response.status(200).json(invoice);
});

export default router;