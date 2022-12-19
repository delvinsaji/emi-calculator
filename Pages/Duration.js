import { SafeAreaView, View, StyleSheet } from "react-native";
import Globalstyle from "../Global";
import Quote from "../Main Components/Quote";
import Input from "../Main Components/Input";
import { useState } from "react";
import TenorComp from "../Main Components/TenorComp";
import Calculate from "../Main Components/Calculate";
import Reset from "../Main Components/Reset";
import Result from "../Main Components/Result";

export default function Duration() {
  const [emi, setEmi] = useState("");
  const [loan, setLoan] = useState("");
  const [state, setState] = useState(false);
  const [interest, setInterest] = useState("");
  function calculation() {}

  function reset() {}

  return (
    <SafeAreaView style={Globalstyle.container}>
      <Quote></Quote>
      <Input head={"EMI Amount"} statevalue={emi} state={setEmi}></Input>
      <Input head={"Loan Amount"} statevalue={loan} state={setLoan}></Input>
      <Input
        head={"Interest Rate"}
        statevalue={interest}
        state={setInterest}
      ></Input>
      <View style={styles.buttons}>
        <Calculate calculation={calculation}></Calculate>
        <Reset reset={reset}></Reset>
      </View>
      {state ? <Result></Result> : ""}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    marginTop: 10,
  },
});
