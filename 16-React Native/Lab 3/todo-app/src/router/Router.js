import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import { Text, TouchableOpacity } from "react-native";
import CompletedTasks from "../CompletedTasks";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import StackNavigator from "./StackNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

export const ROUTES = {
  STACK: "Stack",
  HOME: "Home",
  TODO_DETAILS: "TodoDetails",
  COMPLETED_TASKS: "CompletedTasks",
};

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#00786F",
          },
          headerTitleStyle: {
            color: "#fff",
            fontSize: 20,
          },
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: 16,
          },
          headerTintColor: "#fff",
          tabBarStyle: {
            position: "absolute",
            width: "90%",
            bottom: 30,
            marginHorizontal: "5%",
            borderRadius: 30,
            borderWidth: 1,
            borderColor: "#cac8c8ff",
          },
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              activeOpacity={0.8}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                marginTop: 15,
              }}
            />
          ),
          tabBarLabel: ({ children, focused }) => (
            <Text style={{ color: focused ? "#00786F" : "black" }}>
              {children}
            </Text>
          ),
        }}
      >
        <Screen
          name={ROUTES.STACK}
          component={StackNavigator}
          options={{
            headerTitle: "TODO APP",
            title: "Home",
            headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="home"
                size={24}
                color={focused ? "#00786F" : "black"}
              />
            ),
          }}
        />
        <Screen
          name={ROUTES.COMPLETED_TASKS}
          component={CompletedTasks}
          options={{
            title: "Completed",
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="check-double"
                size={24}
                color={focused ? "#00786F" : "black"}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
