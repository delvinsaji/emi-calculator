import { SafeAreaView, Text, StyleSheet } from "react-native";
import Title from "../Main Components/Title";

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Title name={"Loan Calculator"}></Title>
      <Title name={"Moratorium Calculator/EMI Deferment"}></Title>
      <Title name={"Comparison"}></Title>
      <Title name={"Change Terms (Before Closure)"}></Title>
      <Title name={"Fixed Obligation to Income Ratio (FOIR)"}></Title>
      <Title name={"Loan to Value"}></Title>
      <Title name={"FOIR + LTV"}></Title>
      <Title name={"FLIP/ STEP UP"}></Title>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEA47FFF",
  },
});
