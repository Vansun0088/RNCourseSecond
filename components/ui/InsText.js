import { Text, StyleSheet, View } from "react-native";

import Colors from "../../constants/Colors";

function InsText({ children }) {
  return <Text style={styles.insText}>{children}</Text>;
}

export default InsText;

const styles = StyleSheet.create({
  insText: {
    color: Colors.yellow,
    fontSize: 24,
  },
});
