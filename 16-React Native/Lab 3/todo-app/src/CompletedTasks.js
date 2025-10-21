import { View, FlatList, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./components/TodoItem";
import { styles } from "./styles";

const CompletedTasks = () => {
  const allTodos = useSelector((state) => state.todos.todos);

  const completedTodos = allTodos.filter((todo) => todo.completed === true);

  return (
    <View style={{ ...styles.todosContainer, marginLeft: "20" }}>
      {completedTodos.length > 0 ? (
        <FlatList
          data={completedTodos}
          renderItem={({ item }) => <TodoItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={{ textAlign: "center", fontSize: 18, marginTop: 20 }}>
          No completed tasks yet
        </Text>
      )}
    </View>
  );
};

export default CompletedTasks;
