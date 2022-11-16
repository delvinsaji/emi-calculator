import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Subcomp({ nav, name }) {
  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        nav.navigate(name);
      }}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "20%",
    borderRightWidth: 1,
    backgroundColor: "blue",
    margin: 10,
    height: 70,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
