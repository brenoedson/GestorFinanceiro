type InvoiceStatus = 'pending' | 'paid';

interface Customer {
  id: number;
  name: string;
  email: string;
}

interface Invoice {
  id: number;
  amount: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  customer: Customer;
}

const invoices: Invoice[] = [
  {
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
  },
  {
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
  },
  {
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
  }
];

export function findAllInvoices(): Invoice[] {
    return invoices;
}

export function findInvoiceById(id: number): Invoice | undefined {
    const invoice = invoices.find(invoice => invoice.id === id);

    if(!invoice) return invoice;
    return invoice;
}