import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Tab3 = () => {
  return (
    <View style={styles.container}>
      <Text>Tab3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tab3;
