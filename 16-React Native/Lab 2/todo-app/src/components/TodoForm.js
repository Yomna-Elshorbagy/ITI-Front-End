import { Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../styles";
import { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const obj = {
      id: Math.random().toString(),
      title,
      description,
      completed: false,
    };

    if (!title.trim()) return;

    setTodos((prev) => [obj, ...prev]);

    setTitle("");
    setDescription("");
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        onChangeText={(value) => setTitle(value)}
        value={title}
      />
      <TextInput
        style={styles.input}
        placeholder="Add Description"
        onChangeText={(value) => setDescription(value)}
        value={description}
      />
      <TouchableOpacity
        style={styles.submitBtn}
        activeOpacity={0.8}
        onPress={handleSubmit}
      >
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

export default TodoForm;
