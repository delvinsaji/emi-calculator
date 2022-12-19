import { SafeAreaView, View, StyleSheet } from "react-native";
import Globalstyle from "../Global";
import Quote from "../Main Components/Quote";
import Input from "../Main Components/Input";
import { useState } from "react";
import TenorComp from "../Main Components/TenorComp";
import Calculate from "../Main Components/Calculate";
import Reset from "../Main Components/Reset";
import Result from "../Main Components/Result";

export default function InterestRate() {
  const [emi, setEmi] = useState("");
  const [loan, setLoan] = useState("");
  const [mode, setMode] = useState("MT");
  const [tenor, setTenor] = useState();
  return (
    <SafeAreaView style={Globalstyle.container}>
      <Quote></Quote>
      <Input head={"EMI Amount"} statevalue={emi} state={setEmi}></Input>
      <Input head={"Loan Amount"} statevalue={loan} state={setLoan}></Input>
      <TenorComp
        mode={mode}
        setMode={setMode}
        tenor={tenor}
        setTenor={setTenor}
      ></TenorComp>
      <View style={styles.buttons}>
        <Calculate></Calculate>
        <Reset></Reset>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    marginTop: 10,
  },
});
