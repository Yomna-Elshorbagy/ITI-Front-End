import { View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import FilterTabs from "./components/FilterTabs";
import Todos from "./components/Todos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setTodosFromStorage } from "./redux/slices/todosSlice.js";
const Home = () => {
  const [filter, setFilter] = useState("all");
  const allTodos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const stored = await AsyncStorage.getItem("todos");
        if (stored) {
          const parsed = JSON.parse(stored);
          dispatch(setTodosFromStorage(parsed));
        }
      } catch (error) {
        console.error("Error loading todos:", error);
      }
    };

    loadTodos();
  }, [dispatch]);

  useEffect(() => {
    AsyncStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  const filterTodos = allTodos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed === true;
    } else if (filter === "uncompleted") {
      return todo.completed === false;
    }
    return true;
  });

  return (
    <View style={styles.container}>
      <TodoForm />

      {allTodos.length > 0 && (
        <>
          <View style={styles.dividerLine} />
          <FilterTabs filter={filter} setFilter={setFilter} />
        </>
      )}

      <Todos todos={filterTodos} />
    </View>
  );
};

export default Home;
