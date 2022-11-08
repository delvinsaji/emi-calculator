import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StyleSheet } from "react-native";
import Globalstyle from "../Global";

export default function EMI() {
  return (
    <SafeAreaView style={Globalstyle.container}>
      <Text style={styles.inputhead}>Loan Amount</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.inputhead}>Rate of Interest</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.inputhead}>Tenor/Duration</Text>
      <TextInput style={styles.input}></TextInput>
      <View style={styles.butview}>
        <TouchableOpacity style={[styles.but1, styles.but]}>
          <Text>CALCULATE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.but2, styles.but]}>
          <Text>RESET</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  but1: { backgroundColor: "blue" },
  but2: { backgroundColor: "grey" },
  but: {
    margin: 15,
    width: 150,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
  },
  butview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "grey",
    fontSize: 20,
  },
  inputhead: {
    margin: 20,
  },
});
