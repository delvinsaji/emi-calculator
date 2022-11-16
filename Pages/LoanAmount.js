import { SafeAreaView, StyleSheet, View } from "react-native";
import Globalstyle from "../Global";
import Quote from "../Main Components/Quote";
import { useState } from "react";
import Input from "../Main Components/Input";
import Reset from "../Main Components/Reset";
import Calculate from "../Main Components/Calculate";
import Tenor from "../Main Components/Tenor";

export default function LoanAmount() {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [tenor, setTenor] = useState("");
  const [mode, setMode] = useState("YR");
  const [emi, setEmi] = useState("");
  const [total, setTotal] = useState("");
  const [totalint, setTotalint] = useState("");
  const [state, setState] = useState(false);

  function calculate() {
    let ten = tenor;
    if (mode == "YR") {
      ten = tenor * 12;
    }
    if ((interest == "") | (tenor == "") | (emi == "")) {
      alert("Please fill all the details");
    } else {
    }
  }
  function reset() {
    setState("false");
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
      <View style={styles.tenor}>
        <Input
          head={"Tenor/Duration"}
          state={setTenor}
          statevalue={tenor}
        ></Input>
        <Tenor setMode={setMode} mode={mode}></Tenor>
      </View>
      <View style={styles.buttons}>
        <Calculate calculation={calculate}></Calculate>
        <Reset reset={reset}></Reset>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tenor: {
    flexDirection: "row",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 20,
  },
});
