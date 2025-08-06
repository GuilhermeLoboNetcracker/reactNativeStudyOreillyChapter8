import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from 'react-redux';
import ExpensesList from "../components/ExpensesList";
import { RootState } from "../redux/store";
import defaultPageStyles from '../styles/defaultPage';

export default function allExpenses() {

  const expenses = useSelector((state: RootState) => state.expense);
  const [ expensesTotal, setExpensesTotal] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    expenses.forEach(expense => {
      total = total + expense.value;
    });
    
    setExpensesTotal(total);
  }, [expenses]);

  return (
    <View style={defaultPageStyles.container}>
        <ExpensesList list={expenses} totalValue={expensesTotal}/>
    </View>
  );
}
