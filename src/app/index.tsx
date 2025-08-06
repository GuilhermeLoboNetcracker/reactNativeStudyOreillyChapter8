import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from 'react-redux';
import ExpensesList from '../components/ExpensesList';
import { RootState } from "../redux/store";
import defaultPageStyles from '../styles/defaultPage';
import expenseState from '../types/expenseType';

export default function Index() {

  const expenses = useSelector((state: RootState) => state.expense);

  const [ last7daysExpenses, setLast7daysExpenses ] = useState<expenseState[]>([]);
  const [ last7daysExpensesTotal, setLast7daysExpensesTotal] = useState<number>(0);

  useEffect(() => {
    filterExpenses();
  }, [expenses]);

  useEffect(() => {
    calculateTotalValue();
  }, [last7daysExpenses]);

  function filterExpenses(){
    const today = new Date();
    const sevenDaysAgo  = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);

    const expensesFiltered = expenses.filter(expense => {
      const expenseDate = new Date(expense.date);
      return expenseDate >= sevenDaysAgo && expenseDate <= today;
    });

    setLast7daysExpenses(expensesFiltered);
  }

  function calculateTotalValue(){
    let total = 0;
    last7daysExpenses.forEach(expense => {
      total = total + expense.value;
    });
    
    setLast7daysExpensesTotal(total);
  }

  return (
    <View style={defaultPageStyles.container}>
      <ExpensesList list={last7daysExpenses} totalValue={last7daysExpensesTotal}/>
    </View>
  );
}
