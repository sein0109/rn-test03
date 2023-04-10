import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color } from "../styles/global";
import { Button } from "react-native-elements";

const Wallets = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Create Wallet"
        onPress={() => {
          navigation.navigate("CreateWallet");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
});

export default Wallets;
