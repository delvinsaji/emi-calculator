import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import Globalstyle from "../Global";
import { useState } from "react";
import Input from "../Main Components/Input";
import Quote from "../Main Components/Quote";
import Reset from "../Main Components/Reset";
import Calculate from "../Main Components/Calculate";
import Tenor from "../Main Components/Tenor";
import Result from "../Main Components/Result";

export default function EMI() {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [tenor, setTenor] = useState("");
  const [mode, setMode] = useState("YR");
  const [emi, setEmi] = useState("");
  const [total, setTotal] = useState("");
  const [totalint, setTotalint] = useState("");
  const [state, setState] = useState(false);

  const arrhead = ["EMI(Monthly Payment)", "Total Payment", "Total Interest"];
  const arr = [emi, total, totalint];

  function calculation() {
    let ten = 0;
    ten = tenor;
    if ((amount === "") | (tenor === "") | (interest === "")) {
      alert("Please fill the given details");
    } else {
      if (mode === "YR") {
        ten = tenor * 12;
      }
      let a = (interest * 0.01) / 12;
      let emiv =
        amount * a * (Math.pow(1 + a, ten) / (Math.pow(1 + a, ten) - 1));
      let totalintv = (Number(emiv) - amount / ten) * ten;
      let totalv = Number(amount) + Number(totalintv);
      setEmi(emiv);
      setTotalint(totalintv);
      setTotal(totalv);
      setState(true);
    }
  }

  function reset() {
    setAmount("");
    setTenor("");
    setInterest("");
    setState(false);
  }
  return (
    <SafeAreaView style={Globalstyle.container}>
      <Quote></Quote>
      <Input state={setAmount} head={"Loan Amount"} statevalue={amount}></Input>
      <Input
        state={setInterest}
        head={"Interest Rate"}
        statevalue={interest}
      ></Input>
      <View style={styles.tenor}>
        <Input
          state={setTenor}
          head={"Tenor/Duration"}
          statevalue={tenor}
        ></Input>
        <Tenor setMode={setMode} mode={mode}></Tenor>
      </View>
      <View style={styles.butview}>
        <Calculate calculation={calculation}></Calculate>
        <Reset reset={reset}></Reset>
      </View>
      {state ? <Result head={arrhead} res={arr}></Result> : ""}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  butview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  tenor: {
    flexDirection: "row",
  },
});
