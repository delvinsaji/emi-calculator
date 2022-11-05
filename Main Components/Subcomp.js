import { View, Text, StyleSheet } from "react-native";

export default function Subcomp(props) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { height: 20, width: "100%", borderRightWidth: 1 },
  text: {},
});
