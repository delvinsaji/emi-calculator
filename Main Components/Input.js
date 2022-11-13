import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Input(props) {
  return (
    <View>
      <Text style={styles.inputhead}>{props.head}</Text>
      <TextInput
        style={styles.input}
        value={props.statevalue}
        onChangeText={(e) => {
          props.state(e);
        }}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
