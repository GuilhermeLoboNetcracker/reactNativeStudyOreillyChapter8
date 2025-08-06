import { useState } from "react";
import { Modal, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { createExpense } from '../../../redux/slices/expenseSlice';
import Button from "../../Button";
import styles from "../styles";

interface AddModalProps{
  modalIsVisible: boolean;
  setModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddModal({modalIsVisible, setModalIsVisible}: AddModalProps) {

  const [ title, setTitle ] = useState<string>('');
  const [ date, setDate ] = useState<string>('');
  const [ value, setValue ] = useState<number>(0);
  const dispatch = useDispatch();

  function handleAdd(){
    dispatch(createExpense({id: uuidv4(), title, date, value}));
    setModalIsVisible(false);
  }

  return (
    <Modal
        style={styles.modal}
        visible={modalIsVisible} 
        animationType='slide' 
        transparent={false}
    >
        <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Add Expense</Text>
        </View>
        <View style={styles.modalBody}>
            <TextInput 
                style={styles.modalBodyInput}
                value={title}
                onChangeText={setTitle}
                placeholder="Title"
            />
            <TextInput 
                style={styles.modalBodyInput}
                value={date}
                onChangeText={setDate}
                placeholder="XXXX-XX-XX"
            />
            <TextInput
              keyboardType="numeric"
              style={styles.modalBodyInput}
              value={value.toString()}
              onChangeText={(text) => setValue(Number(text))}
              placeholder="value"
            />
            <View style={styles.modalBodyButtonsWrapper}>
                <Button 
                    text="Cancel"
                    onPress={() => setModalIsVisible(false)}
                />
                <Button 
                    text="Add"
                    onPress={handleAdd}
                />
            </View>
        </View>
    </Modal>
  )
}
