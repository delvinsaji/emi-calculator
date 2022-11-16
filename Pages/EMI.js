import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import Globalstyle from "../Global";
import { useState } from "react";
import Input from "../Main Components/Input";
import Quote from "../Main Components/Quote";
import Reset from "../Main Components/Reset";
import Calculate from "../Main Components/Calculate";
import Tenor from "../Main Components/Tenor";

export default function EMI() {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [tenor, setTenor] = useState("");
  const [mode, setMode] = useState("YR");
  const [emi, setEmi] = useState("");
  const [total, setTotal] = useState("");
  const [totalint, setTotalint] = useState("");
  const [state, setState] = useState(false);

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
      let emiv = Math.round(
        amount * a * (Math.pow(1 + a, ten) / (Math.pow(1 + a, ten) - 1))
      );
      let totalintv = Math.round((Number(emiv) - amount / ten) * ten);
      let totalv = Math.round(Number(amount) + Number(totalintv));
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
      {state ? (
        <View style={styles.result}>
          <Text
            style={[styles.resulttext, { fontWeight: "bold", fontSize: 17 }]}
          >
            EMI(Monthly Payment)
          </Text>
          <Text style={styles.resulttext}>{emi}</Text>
          <Text
            style={[styles.resulttext, { fontWeight: "bold", fontSize: 17 }]}
          >
            Total Payment
          </Text>
          <Text style={styles.resulttext}>{total}</Text>
          <Text
            style={[styles.resulttext, { fontWeight: "bold", fontSize: 17 }]}
          >
            Total Interest
          </Text>
          <Text style={styles.resulttext}>{totalint}</Text>
        </View>
      ) : (
        ""
      )}
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
  result: {
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#00539CFF",
    color: "white",
    margin: 15,
    marginTop: 5,
  },

  resulttext: {
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
});
