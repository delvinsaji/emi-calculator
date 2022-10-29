import { SafeAreaView, Text, StyleSheet } from "react-native";
import Title from "../Main Components/Title";

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Title name={"Loan Calculator"}></Title>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEA47FFF",
  },
});
