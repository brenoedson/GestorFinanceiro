import { Invoice } from './InvoiceType.ts'
import InvoiceTable from "./InvoiceTable.tsx";

export default function InvoicePage() {

    const invoices : Invoice[] = [
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

    return <>
        <h1>Faturas</h1>
        <main>
            <InvoiceTable datas={ invoices } />
        </main>
    </>;
}