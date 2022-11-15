import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import Globalstyle from "../Global";
import { useState } from "react";
import Input from "../Main Components/Input";
import Quote from "../Main Components/Quote";
import Reset from "../Main Components/Reset";
import Calculate from "../Main Components/Calculate";
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
    console.log(emi, total, totalint);
    let ten = 0;
    ten = tenor;
    if ((amount === "") | (tenor === "") | (interest === "")) {
      alert("Please fill the given details");
    } else {
      console.log(mode);
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
        <TouchableOpacity
          style={[
            styles.mode1,
            { backgroundColor: mode == "YR" ? "grey" : "rgba(52,52,52,0)" },
          ]}
          onPress={() => {
            setMode("YR");
          }}
        >
          <Text style={{ fontSize: 20 }}>YR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.mode2,
            { backgroundColor: mode == "MT" ? "grey" : "rgba(52,52,52,0)" },
          ]}
          onPress={() => {
            setMode("MT");
          }}
        >
          <Text style={{ fontSize: 20 }}>MT</Text>
        </TouchableOpacity>
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
  mode1: {
    marginRight: 10,
    marginTop: 30,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  mode2: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
  },
  resulttext: {
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
});
