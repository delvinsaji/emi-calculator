import { View, Text, StyleSheet } from "react-native";

export default function Subcomp(props) {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
