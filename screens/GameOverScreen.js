import { View, Text, StyleSheet } from "react-native";
function GameOverScreen() {
  return (
    <View style={styles.screen}>
      <Text>GameIsOver!</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
