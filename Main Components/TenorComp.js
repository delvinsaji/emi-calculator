import { View, StyleSheet } from "react-native";
import Input from "./Input";
import Tenor from "./Tenor";

export default function TenorComp(props) {
  return (
    <View style={styles.tenor}>
      <Input
        head={"Tenor/Duration"}
        statevalue={props.tenor}
        state={props.setTenor}
      ></Input>
      <Tenor setMode={props.setMode} mode={props.mode}></Tenor>
    </View>
  );
}

const styles = StyleSheet.create({
  tenor: {
    flexDirection: "row",
  },
});
