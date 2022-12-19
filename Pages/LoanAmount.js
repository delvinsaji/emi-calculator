import { SafeAreaView, StyleSheet, View } from "react-native";
import Globalstyle from "../Global";
import Quote from "../Main Components/Quote";
import { useState } from "react";
import Input from "../Main Components/Input";
import Reset from "../Main Components/Reset";
import Calculate from "../Main Components/Calculate";
import TenorComp from "../Main Components/TenorComp";
import Result from "../Main Components/Result";

export default function LoanAmount() {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [tenor, setTenor] = useState("");
  const [mode, setMode] = useState("YR");
  const [emi, setEmi] = useState("");
  const [total, setTotal] = useState("");
  const [totalint, setTotalint] = useState("");
  const [state, setState] = useState(false);

  const arrhead = ["Loan Amount", "Total Payment", "Total Interest"];
  const arr = [amount, total, totalint];

  function calculate() {
    let ten = tenor;
    if (mode == "YR") {
      ten = tenor * 12;
    }
    if ((interest == "") | (tenor == "") | (emi == "")) {
      alert("Please fill all the details");
    } else {
      let a = (interest * 0.01) / 12;
      let amountv =
        (emi * (Math.pow(1 + a, ten) - 1)) / (a * Math.pow(1 + a, ten));
      let totalv = emi * ten;
      let totalintv = totalv - amountv;
      setAmount(amountv);
      setTotal(totalv);
      setTotalint(totalintv);
      setState(true);
    }
  }
  function reset() {
    setState("false");
    setTotal("");
    setTotalint("");
    setAmount("");
  }

  return (
    <SafeAreaView style={Globalstyle.container}>
      <Quote></Quote>
      <Input head={"EMI Amount"} state={setEmi} statevalue={emi}></Input>
      <Input
        head={"Rate of Interest"}
        state={setInterest}
        statevalue={interest}
      ></Input>
      <TenorComp
        mode={mode}
        setMode={setMode}
        tenor={tenor}
        setTenor={setTenor}
      ></TenorComp>
      <View style={styles.buttons}>
        <Calculate calculation={calculate}></Calculate>
        <Reset reset={reset}></Reset>
      </View>
      {state ? <Result head={arrhead} res={arr}></Result> : ""}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    marginTop: 20,
  },
});
