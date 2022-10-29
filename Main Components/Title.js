import { View, Text, StyleSheet } from "react-native";

export default function Title(props) {
  return (
    <View style={styles.box}>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#00539CFF",
    margin: 10,
    padding: 8,
    borderRadius: 10,
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
