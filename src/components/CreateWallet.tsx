import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import "react-native-get-random-values";
import "@ethersproject/shims";
import { ethers } from "ethers";
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";
import { Session } from "@supabase/supabase-js";

const CreateWallet = ({ navigation }) => {
  const ethers = require("ethers");
  const wallet = ethers.Wallet.createRandom();
  console.log("address:", wallet.address);
  console.log("mnemonic:", wallet.mnemonic.phrase);
  console.log("privateKey:", wallet.privateKey);

  return (
    <View style={{ flex: 1 }}>
      <Text>
        아래 12개 니모닉을 복사하여 백업하세요. 지갑을 복구하는데 매우 중요한
        데이터입니다.
      </Text>
      <View style={{ paddingTop: 10 }}>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
            numberOfLines={5}
            multiline={true}
            editable={true}
            secureTextEntry={true}
            value={wallet.mnemonic.phrase}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="OK"
          onPress={() => {
            navigation.navigate("Wallets");
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textAreaContainer: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
});

export default CreateWallet;
