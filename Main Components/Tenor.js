import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Tenor(props) {
  return (
    <View style={styles.tenor}>
      <TouchableOpacity
        style={[
          styles.mode1,
          { backgroundColor: props.mode == "YR" ? "grey" : "rgba(52,52,52,0)" },
        ]}
        onPress={() => {
          props.setMode("YR");
        }}
      >
        <Text style={{ fontSize: 20 }}>YR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.mode2,
          { backgroundColor: props.mode == "MT" ? "grey" : "rgba(52,52,52,0)" },
        ]}
        onPress={() => {
          props.setMode("MT");
        }}
      >
        <Text style={{ fontSize: 20 }}>MT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  tenor: {
    flexDirection: "row",
  },
});
