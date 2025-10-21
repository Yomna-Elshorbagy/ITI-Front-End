import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

const TodoDetails = () => {
  const { params } = useRoute();

  if (!params?.item) return null;

  const selectedTodo = params.item;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>{selectedTodo.title}</Text>
      <Text style={{ fontSize: 20 }}>{selectedTodo.description}</Text>
    </View>
  );
};

export default TodoDetails;
