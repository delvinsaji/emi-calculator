import { View, Text, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";

export default function EMI() {
  return (
    <View>
      <Text>Loan Amount</Text>
      <TextInput></TextInput>
      <Text>Rate of Interest</Text>
      <TextInput></TextInput>
      <Text>Tenor/Duration</Text>
      <TextInput></TextInput>
      <View>
        <Button style={[styles.but1, styles.but]} title="CALCULATE"></Button>
        <Button style={[styles.but2, styles.but]} title="RESET"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  but1: {},
  but2: {},
  but: {},
});
