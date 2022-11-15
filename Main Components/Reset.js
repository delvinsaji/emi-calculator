import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function Reset(props) {
  return (
    <TouchableOpacity style={[styles.but2, styles.but]} onPress={props.reset}>
      <Text>RESET</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  but: {
    margin: 15,
    width: 150,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
  },
  but2: { backgroundColor: "grey" },
});
