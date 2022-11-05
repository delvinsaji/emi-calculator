import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Subcomp(props) {
  return (
    <TouchableOpacity style={styles.box}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 80,
    borderRightWidth: 1,
    backgroundColor: "blue",
    margin: 10,
    height: 70,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
});
