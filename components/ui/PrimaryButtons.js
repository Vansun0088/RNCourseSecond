import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function PrimaryButton({ children, onPress, style }) {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        style={({ pressed }) => (pressed ? [styles.pres, styles.pressed] : styles.pres)}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

console.log("render PrimaryButton " + "|" + Platform.OS + "|");

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    margin: 4,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "open-sans",
    fontSize: 15,
  },
  pres: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 28,
  },
  pressed: {
    opacity: 0.65,
    backgroundColor: Colors.primary500,
  },
});
