import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function Calculate(props) {
  return (
    <TouchableOpacity
      style={[styles.but1, styles.but]}
      onPress={props.calculation}
    >
      <Text>CALCULATE</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  but1: { backgroundColor: "blue" },

  but: {
    margin: 15,
    width: 150,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
  },
});
