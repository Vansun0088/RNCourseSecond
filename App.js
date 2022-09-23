import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessedNumber, setGuessedNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function guessedNumberHandler(guessedNumber) {
    setGuessedNumber(guessedNumber);
  }

  function setRoundsNumberHandler(roundsNumber) {
    setGuessRounds(roundsNumber);
  }

  function newGameHandler() {
    setUserNumber(null);
    setGuessedNumber(undefined);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber != undefined && guessedNumber === undefined) {
    screen = (
      <GameScreen
        roundsNumberSet={setRoundsNumberHandler}
        onGuessedNumber={guessedNumberHandler}
        chosenNumber={userNumber}
      />
    );
  } else if (userNumber && guessedNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onRestart={newGameHandler}
      />
    );
  }

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
