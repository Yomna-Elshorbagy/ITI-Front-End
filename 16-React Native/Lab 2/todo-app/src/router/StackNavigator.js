import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home";
import TodoDetails from "../TodoDetails";
import { ROUTES } from "./Router";
import { Platform } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false, headerShown: Platform.OS === "ios" }}
    >
      <Screen name={ROUTES.HOME} component={Home} />
      <Screen name={ROUTES.TODO_DETAILS} component={TodoDetails} />
    </Navigator>
  );
};

export default StackNavigator;
