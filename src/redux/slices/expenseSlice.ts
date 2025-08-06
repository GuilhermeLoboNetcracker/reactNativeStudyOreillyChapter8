import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import InicialStateExpenses from '../../mocks/InicialStateExpenses';
import expenseState from '../../types/expenseType';

const initialState: expenseState[] = InicialStateExpenses;

const expenseSlice = createSlice({
    name: 'expense',
    initialState: initialState,
    reducers: {
        createExpense(state, action: PayloadAction<expenseState>) {
            state.push(action.payload);
        },
        deleteExpense(state, action: PayloadAction<string>) {
            return state.filter(item => item.id !== action.payload);
        },
        updateExpense(state, action: PayloadAction<expenseState>) {
            const index = state.findIndex(exp => exp.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
});

export const { createExpense, deleteExpense, updateExpense } = expenseSlice.actions;
export default expenseSlice.reducer;