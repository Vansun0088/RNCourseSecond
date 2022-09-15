import { StyleSheet, Text } from "react-native";

import Colors from "../../constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
