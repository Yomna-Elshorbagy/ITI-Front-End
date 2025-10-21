import { View, FlatList } from "react-native";
import { styles } from "../styles";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const Todos = ({ todos }) => {
  return (
    <View style={styles.todosContainer}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Todos;
