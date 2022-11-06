import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Title from "../Main Components/Title";
import Globalstyle from "../Global";

export default function Mainpage({ navigation }) {
  return (
    <SafeAreaView style={Globalstyle.container}>
      <ScrollView>
        <Title name={"Loan Calculator"} nav={navigation}></Title>
        <Title
          name={"Moratorium Calculator/EMI Deferment"}
          nav={navigation}
        ></Title>
        <Title name={"Comparison"} nav={navigation}></Title>
        <Title name={"Change Terms (Before Closure)"} nav={navigation}></Title>
        <Title
          name={"Fixed Obligation to Income Ratio (FOIR)"}
          nav={navigation}
        ></Title>
        <Title name={"Loan to Value"} nav={navigation}></Title>
        <Title name={"FOIR + LTV"} nav={navigation}></Title>
        <Title name={"FLIP/STEP UP"} nav={navigation}></Title>
      </ScrollView>
    </SafeAreaView>
  );
}
