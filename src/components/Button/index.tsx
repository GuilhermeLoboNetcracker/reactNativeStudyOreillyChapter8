import { Pressable, PressableProps, Text } from "react-native";
import styles from "./styles";

interface ButtonProps extends PressableProps{
    text: string;
}

export default function Button({text, ...props}: ButtonProps) {
  return (
    <Pressable 
        style={styles.container}
        {...props}
    >
        <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}
