import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../router/Router";
import { styles } from "../styles";
import Feather from "@expo/vector-icons/Feather";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleteOrNot } from "../redux/slices/todosSlice.js";

const TodoItem = ({ item }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.todoItem} activeOpacity={1}>
      <Text
        style={{
          fontSize: 20,
          flex: 1,
          textDecorationLine: item.completed ? "line-through" : "none",
        }}
        onPress={() => navigate(ROUTES.TODO_DETAILS, { item })}
      >
        {item.title}
      </Text>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <FontAwesome
          name="check-circle"
          size={20}
          color={item.completed ? "gray" : "green"}
          onPress={() => dispatch(toggleCompleteOrNot(item.id))}
        />
        <Feather
          name="trash-2"
          size={20}
          color="red"
          onPress={() => dispatch(deleteTodo(item.id))}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
