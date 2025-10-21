import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "../styles";

const FilterTabs = ({ filter, setFilter }) => {
  return (
    <View style={styles.filterContainer}>
      {["all", "completed", "uncompleted"].map((type) => {
        const isActive = filter === type;

        return (
          <TouchableOpacity
            style={{
              ...styles.activeFilterBtn,
              backgroundColor: isActive ? "#00786F" : "#f0f0f0",
            }}
            key={type}
            onPress={() => setFilter(type)}
          >
            <Text
              style={{
                ...styles.activeFilterText,
                color: isActive ? "white" : "black",
              }}
            >
              {type}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FilterTabs;
