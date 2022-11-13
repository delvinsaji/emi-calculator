import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import quotes from "../Quotes";

export default function Quote() {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random(0, 1) * quotes.length)]
  );
  return (
    <View style={styles.quotebox}>
      <Text style={styles.quote}>{quote}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  quote: {
    margin: 25,
    textAlign: "center",
  },
  quotebox: {
    height: 110,
  },
});
