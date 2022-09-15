import { Alert, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButtons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ chosenNumber, onGuessedNumber }) {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  /*  useEffect(() => {
    if (currentGuess === userNumber) {
      onGuessedNumber();
    }
  }, []);*/

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < chosenNumber) ||
      (direction === "greater" && currentGuess > chosenNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry:)", style: "cancel'" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    if (currentGuess === chosenNumber) {
      console.log(currentGuess);
      onGuessedNumber(currentGuess);
    }
  }

  return (
    <View style={styles.generalView}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text></Text>
      <View>
        <Text>Higher or lower</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>+</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  generalView: {
    flex: 1,
    padding: 28,
  },
  buttonContainer: {
    flexDirection: "column",
  },
  button: {
    width: "50%",
  },
});
