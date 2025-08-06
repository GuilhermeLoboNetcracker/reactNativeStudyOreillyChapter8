import { SPACING } from '@/src/styles/constants';
import { FlatList, View } from 'react-native';
import expenseState from '../../types/expenseType';
import ExpensesCard from '../ExpensesCard';
import TotalValueBox from '../TotalValueBox';

interface ExpensesListProps{
    list: expenseState[];
    totalValue: number;
}

export default function ExpensesList({list, totalValue}: ExpensesListProps) {
  return (
    <FlatList
        style={{width: '100%'}}
        data={list}
        keyExtractor={item => item.id}
        renderItem={ ({item}) =>
            <ExpensesCard id={item.id} date={item.date} title={item.title} value={item.value}/>
        }
        ItemSeparatorComponent={() => <View style={{marginVertical: SPACING.extraSmall}}/>}
        ListHeaderComponent={ <TotalValueBox text="Last 7 Days" value={totalValue}/>}
    />
  )
}
