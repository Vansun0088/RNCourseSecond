import { View, StyleSheet, Image, Text, useWindowDimensions, ScrollView } from "react-native";

import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButtons";

function GameOverScreen({ onRestart, roundsNumber, userNumber }) {
  const { width, height } = useWindowDimensions();

  //const screenRotated = height < 380 ? { flexDirection: "row" } : {};
  //const secondScreenRotated = height < 380 ? { flex: 1 } : {};
  //const imageContainerRotated =
  //height < 380
  //  ? { width: 150, height: 150, borderRadius: 75 }
  ////  : width < 380
  //? { width: 150, height: 150, borderRadius: 75 }
  //: { width: 300, height: 300, borderRadius: 150 };

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={require("../assets/images/success.png")} />
        </View>
        <Text style={styles.OverText}>
          Your phone needed<Text style={styles.highlightedText}> {roundsNumber}</Text> rounds to
          guess the number
          <Text style={styles.highlightedText}> {userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onRestart}>Restart!</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    //  width: Sizes.deviceWidth < 374 ? 150 : 300,
    //  height: Sizes.deviceWidth < 374 ? 150 : 300,
    //  borderRadius: Sizes.deviceWidth < 374 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.black,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlightedText: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
  OverText: {
    textAlign: "center",
    fontFamily: "open-sans",
    marginBottom: 24,
    borderColor: Colors.black,
  },
});
