import { v4 as uuidv4 } from 'uuid';
import expenseState from '../types/expenseType';

const InicialStateExpenses: expenseState[] = 
[
    {
        id: uuidv4(),
        title: 'A book',
        date: '2022-2-19',
        value: 14.99,
    },
    {
        id: uuidv4(),
        title: 'Another book',
        date: '2021-2-19',
        value: 54.99,
    },
    {
        id: uuidv4(),
        title: 'Ice Cream',
        date: '2025-8-06',
        value: 9.99,
    },
    {
        id: uuidv4(),
        title: 'A car',
        date: '2025-7-30',
        value: 214.99,
    },
    {
        id: uuidv4(),
        title: 'A Bus',
        date: '2025-8-05',
        value: 514.99,
    },
];

export default InicialStateExpenses;