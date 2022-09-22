import { View, StyleSheet, Image, Text } from "react-native";

import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButtons";

function GameOverScreen({ onRestart, roundsNumber, userNumber }) {
  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <Image style={styles.image} source={require("../assets/images/success.png")} />
      <Text style={styles.OverText}>
        Your phone needed<Text style={styles.highlightedText}> {roundsNumber}</Text> rounds to guess
        the number
        <Text style={styles.highlightedText}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestart}>Restart!</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.black,
    overflow: "hidden",
    margin: 36,
  },
  highlightedText: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
  OverText: {
    textAlign: "center",
    fontFamily: "open-sans",
    fontSize: 24,
    padding: 20,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: Colors.black,
  },
});
