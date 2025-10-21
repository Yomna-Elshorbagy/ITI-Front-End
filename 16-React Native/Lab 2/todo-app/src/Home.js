import { View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import FilterTabs from "./components/FilterTabs";
import Todos from "./components/Todos";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const handleSuccess = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const stored = await AsyncStorage.getItem("todos");
        if (stored) setTodos(JSON.parse(stored));
        console.log(stored);
      } catch (error) {
        console.error("Error loading todos:", error);
      }
    };
    loadTodos();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filterTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed === true;
    } else if (filter === "uncompleted") {
      return todo.completed === false;
    }
    return true;
  });

  return (
    <View style={styles.container}>
      <TodoForm setTodos={setTodos} />

      {todos.length > 0 && (
        <>
          <View style={styles.dividerLine} />
          <FilterTabs filter={filter} setFilter={setFilter} />
        </>
      )}

      <Todos
        todos={filterTodos}
        onDelete={handleDelete}
        onSuccess={handleSuccess}
      />
    </View>
  );
};

export default Home;
