import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../router/Router";
import { styles } from "../styles";
import Feather from "@expo/vector-icons/Feather";

const TodoItem = ({ item, onDelete, onSuccess }) => {
  const { navigate } = useNavigation();

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
          onPress={() => onSuccess(item.id)}
        />
        <Feather
          name="trash-2"
          size={20}
          color="red"
          onPress={() => onDelete(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
