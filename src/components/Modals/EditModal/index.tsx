import { COLORS } from "@/src/styles/constants"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useState } from "react"
import { Modal, Pressable, Text, TextInput, View } from "react-native"
import { useDispatch } from "react-redux"
import { deleteExpense, updateExpense } from '../../../redux/slices/expenseSlice'
import Button from "../../Button"
import styles from "../styles"

interface EditModalProps{
  modalIsVisible: boolean;
  setModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  title: string;
  date: string;
  value: number;
}

export default function EditModal({modalIsVisible, setModalIsVisible, id, title, date, value}: EditModalProps) {

  const [ titleEdited, setTitleEdited ] = useState<string>(title);
  const [ dateEdited, setDateEdited ] = useState<string>(date);
  const [ valueEdited, setValueEdited ] = useState<number>(value);
  const dispatch = useDispatch();

  function handleDelete(){
    dispatch(deleteExpense(id));
    setModalIsVisible(false);
  }

  function handleUpdate(){
    dispatch(updateExpense({id: id, title: titleEdited, date: dateEdited, value: valueEdited}));
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
            <Text style={styles.modalHeaderTitle}>Edit Expense</Text>
        </View>
        <View style={styles.modalBody}>
            <TextInput 
                style={styles.modalBodyInput}
                value={titleEdited}
                onChangeText={setTitleEdited}
            />
            <TextInput 
                style={styles.modalBodyInput}
                value={dateEdited}
                onChangeText={setDateEdited}
            />
            <TextInput
              keyboardType="numeric"
              style={styles.modalBodyInput}
              value={valueEdited.toString()}
              onChangeText={(text) => setValueEdited(Number(text))}
            />
            <View style={styles.modalBodyButtonsWrapper}>
                <Button 
                    text="Cancel"
                    onPress={() => setModalIsVisible(false)}
                />
                <Button 
                    text="Update"
                    onPress={handleUpdate}
                />
            </View>
            <View style={styles.modalBodySeparator}/>
            <Pressable onPress={handleDelete}>
              <Ionicons name="trash" color={COLORS.red} size={32}/>
            </Pressable>
        </View>
    </Modal>
  )
}
