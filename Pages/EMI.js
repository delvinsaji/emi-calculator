import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StyleSheet } from "react-native";
import Globalstyle from "../Global";
import quotes from "../Quotes";
import { useState } from "react";

export default function EMI() {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random(0, 1) * quotes.length)]
  );
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [tenor, setTenor] = useState("");
  const [mode, setMode] = useState("YR");
  const [emi, setEmi] = useState("");
  const [total, setTotal] = useState("");
  const [totalint, setTotalint] = useState("");
  const [state, setState] = useState(false);

  return (
    <SafeAreaView style={Globalstyle.container}>
      <View style={styles.quotebox}>
        <Text style={styles.quote}>{quote}</Text>
      </View>
      <Text style={styles.inputhead}>Loan Amount</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={(e) => {
          console.log(e);
          setAmount(e);
        }}
      ></TextInput>
      <Text style={styles.inputhead}>Rate of Interest</Text>
      <TextInput
        style={styles.input}
        value={interest}
        onChangeText={(e) => {
          setInterest(e);
        }}
      ></TextInput>
      <Text style={styles.inputhead}>Tenor/Duration</Text>
      <View style={styles.tenor}>
        <TextInput
          style={[styles.input, { flex: 0.9 }]}
          value={tenor}
          onChangeText={(e) => {
            setTenor(e);
          }}
        ></TextInput>
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
        <TouchableOpacity
          style={[styles.but1, styles.but]}
          onPress={() => {
            let ten = tenor;
            if ((amount === "") | (tenor === "") | (interest === "")) {
              alert("Please fill the given details");
            } else {
              if (mode == "YR") {
                let ten = tenor * 12;
              }
              let a = (interest * 0.01) / 12;
              setEmi(
                amount * a * (Math.pow(1 + a, ten) / (Math.pow(1 + a, ten) - 1))
              );
              console.log(amount, total);
              setTotal(amount + emi * ten);
              setTotalint(amount - total);
              setState(true);
            }
          }}
        >
          <Text>CALCULATE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.but2, styles.but]}
          onPress={() => {
            setAmount("");
            setTenor("");
            setInterest("");
            setState(false);
          }}
        >
          <Text>RESET</Text>
        </TouchableOpacity>
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
  but1: { backgroundColor: "blue" },
  but2: { backgroundColor: "grey" },
  but: {
    margin: 15,
    width: 150,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
  },
  butview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  input: {
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "grey",
    fontSize: 20,
    marginBottom: 10,
  },
  inputhead: {
    margin: 20,
    marginTop: 10,
  },
  quote: {
    margin: 25,
    textAlign: "center",
  },
  quotebox: {
    height: 110,
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
  },
  mode2: {},
  resulttext: {
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
});
