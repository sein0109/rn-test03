import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <Text>forgetPassword</Text>
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

export default ForgetPassword;
