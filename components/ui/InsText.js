import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function InsText({ children, style }) {
  return <Text style={[styles.insText, style]}>{children}</Text>;
}

export default InsText;

const styles = StyleSheet.create({
  insText: {
    fontFamily: "open-sans",
    color: Colors.yellow,
    fontSize: 24,
  },
});
