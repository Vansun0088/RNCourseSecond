import { Alert, StyleSheet, View, FlatList, Text } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import InsText from "../components/ui/InsText";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButtons";
import Card from "../components/ui/Card";
import Colors from "../constants/Colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (min === 1 && max === 100 && exclude === rndNum) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ chosenNumber, onGuessedNumber, roundsNumberSet }) {
  const initialGuess = generateRandomBetween(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      onGuessedNumber(currentGuess);
      minBoundary = 1;
      maxBoundary = 100;
      roundsNumberSet(guessRounds.length);
    }
  }, [currentGuess]);

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
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  return (
    <View style={styles.generalView}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InsText style={styles.insText}>Higher or lower</InsText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <FlatList
        style={styles.list}
        data={guessRounds}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.log}>
              <Text style={styles.textLog}>#{guessRounds.length - index}</Text>
              <Text style={[styles.textLog, { marginRight: "10%" }]}>Opponent's Guess: {item}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  generalView: {
    flex: 1,
    padding: 28,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  insText: {
    marginBottom: 12,
  },
  log: {
    borderColor: "#240217",
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.yellow,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  textLog: {
    fontFamily: "open-sans",
    fontSize: 16,
    color: Colors.primary500,
  },
  list: {
    padding: 10,
    marginVertical: 10,
    borderTopWidth: 2,
  },
});
