import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

function GoalIinput({ onAddGoal, visabel }) {

    const [textInput, setTextInput] = useState("")
    function goalInputHandler(text) {
        setTextInput(text)
    }

    function addGoalHandler() {
        onAddGoal(textInput)
        setTextInput("")
    }
    return (
        <Modal visible={visabel} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={textInput}
                    placeholder='Your corse goal' />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title='Add Goal' />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default GoalIinput
const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        flex:2,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8

    },
    buttonsContainer: {
        width: '80%',
        flexDirection: "row",

    },
    button: {
        width: "40%",
        marginHorizontal: 8
    }
})