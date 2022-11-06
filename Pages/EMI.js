import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Globalstyle from "../Global";

export default function EMI() {
  return (
    <View style={Globalstyle.container}>
      <Text>Loan Amount</Text>
      <TextInput></TextInput>
      <Text>Rate of Interest</Text>
      <TextInput></TextInput>
      <Text>Tenor/Duration</Text>
      <TextInput></TextInput>
      <View style={styles.butview}>
        <TouchableOpacity style={[styles.but1, styles.but]}>
          <Text>CALCULATE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.but2, styles.but]}>
          <Text>RESET</Text>
        </TouchableOpacity>
      </View>
    </View>
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
});
