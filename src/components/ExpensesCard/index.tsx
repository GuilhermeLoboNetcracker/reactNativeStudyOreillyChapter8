import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import expenseState from '../../types/expenseType';
import ModalStyled from '../Modals/EditModal';

import styles from "./styles";

export default function ExpensesCard({id, title, date, value}: expenseState) {

    const [ modalIsVisible, setModalIsVisible ] = useState<boolean>(false);

    return (
        <>
            <Pressable 
                style={styles.container} 
                onPress={() => setModalIsVisible(true)}
            >
                <View style={styles.informationsWrapper}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>

                <View style={styles.valueWrapper}>
                    <Text style={styles.value}>{value}</Text>
                </View>
            </Pressable>

             <ModalStyled 
                modalIsVisible={modalIsVisible}
                setModalIsVisible={setModalIsVisible}
                id={id}
                title={title}
                date={date}
                value={value}
            />
        </>  
    )
}
