import { StyleSheet, Text, View, Pressable } from "react-native"

function GoalItem({ text, id, onDeleteItem }) {

    return (
        <View style={styles.goalItem} >
            <Pressable android_ripple={{ color: '#dddddd' }} onPress={() => { onDeleteItem(id) }}>
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )
}
export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: '#ffffff'
    },
    goalText: {
        color: '#ffffff',
        padding: 8,
    }
});