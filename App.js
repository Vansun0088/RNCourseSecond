import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessedNumber, setGuessedNumber] = useState();
  /*
  const [gameIsOver, setGameIsOver] = useState(true);
*/
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function guessedNumberHandler(guessedNumber) {
    setGuessedNumber(guessedNumber);
  }

  /*
  function gameOverHandler() {
    setGameIsOver(true);
  }
*/
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber && guessedNumber === undefined) {
    screen = <GameScreen onGuessedNumber={guessedNumberHandler} chosenNumber={userNumber} />;
  } else if (userNumber && guessedNumber) {
    screen = <GameOverScreen />;
  }

  /*if (gameIsOver) {
    screen = <GameOverScreen />;
  }*/

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#430329", Colors.yellow]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/backgroundDIces.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

console.log("render App " + "|" + Platform.OS + "|");

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
