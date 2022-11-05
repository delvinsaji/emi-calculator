import { Pressable, Text, StyleSheet, View, FlatList } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import Subcomp from "./Subcomp";
import data from "../Data";

export default function Title(props) {
  const [bo, setBo] = useState(false);

  return (
    <View>
      <Pressable
        style={styles.box}
        onPress={() => {
          if (bo == false) {
            setBo(true);
          } else {
            setBo(false);
          }
        }}
      >
        <Text style={styles.name}>{props.name}</Text>
        {bo ? (
          <MaterialIcons
            name="keyboard-arrow-up"
            color={"white"}
            size={20}
          ></MaterialIcons>
        ) : (
          <MaterialIcons
            name="keyboard-arrow-down"
            color={"white"}
            size={20}
          ></MaterialIcons>
        )}
      </Pressable>
      {bo ? (
        <View style={styles.subcomp}>
          {data[props.name].map((obj) => (
            <Subcomp name={obj}></Subcomp>
          ))}
        </View>
      ) : (
        ""
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#00539CFF",
    margin: 10,
    padding: 8,
    marginBottom: 0,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  subcomp: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
