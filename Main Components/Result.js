import { View, StyleSheet, Text } from "react-native";

export default function Result(props) {
  let count = -1;

  return (
    <View style={styles.result}>
      {props.head.map((obj) => {
        count = count + 1;
        return (
          <View key={obj}>
            <Text
              style={[styles.resulttext, { fontWeight: "bold", fontSize: 17 }]}
            >
              {obj}
            </Text>
            <Text style={styles.resulttext}>{props.res[count]}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
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
