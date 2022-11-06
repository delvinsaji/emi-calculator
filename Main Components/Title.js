import { Pressable, Text, StyleSheet, View, FlatList } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import Subcomp from "./Subcomp";
import data from "../Data";

export default function Title(props) {
  const [bo, setBo] = useState(false);
  const rows = Math.floor(data[props.name].length / 4) + 1;
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
        <View>
          <View style={styles.subcomp}>
            {data[props.name].slice(0, 4).map((obj, index) => {
              return <Subcomp name={obj} nav={props.nav}></Subcomp>;
            })}
          </View>
          <View style={styles.subcomp}>
            {data[props.name].slice(4, 8).map((obj, index) => {
              return <Subcomp name={obj} nav={props.nav}></Subcomp>;
            })}
          </View>
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
    marginRight: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
