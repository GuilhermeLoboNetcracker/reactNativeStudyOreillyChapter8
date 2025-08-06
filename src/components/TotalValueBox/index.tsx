import { Text, View } from 'react-native';
import styles from './styles';

interface TotalValueBoxProps{
    text: string;
    value: number;
}

export default function TotalValueBox({text, value} : TotalValueBoxProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.value}>${value}</Text>
    </View>
  );
}
