import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalIinput from './components/GoalInput';

export default function App() {
  const [modelIsVisable, setModelIsVisabel] = useState(false)
  const [goals, setGoals] = useState([])

  function startAddGoalHandler() {
    setModelIsVisabel(true)
  }
  function addGoalHandler(enterdGoal) {
    setGoals((perv) => [...perv, { text: enterdGoal, id: String(Math.random()) }])
  }
  function deleteGoalHandler(id) {
    setGoals(perv => perv.filter(goal => goal.id !== id))
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color={"#5e0acc"} onPress={startAddGoalHandler} />
      {modelIsVisable&&<GoalIinput start onAddGoal={addGoalHandler} />}
      <View style={styles.goalsContainer} >
        <Text> List Of Goals...</Text>
        <FlatList data={goals} style={styles.goalsContainer} renderItem={({ item }) => {
          return (<GoalItem key={"key_" + item.id} id={item.id} onDeleteItem={deleteGoalHandler} text={item.text} />)
        }} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    justifyContent:"center",
    alignItems:"center"

  },
  goalsContainer: {
    flex: 3
  },
});
