import { View, FlatList } from "react-native";
import { styles } from "../styles";
import TodoItem from "./TodoItem";

const Todos = ({ todos, onDelete, onSuccess }) => {
  return (
    <View style={styles.todosContainer}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} onDelete={onDelete} onSuccess={onSuccess} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Todos;
