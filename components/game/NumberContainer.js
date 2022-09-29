import { Text, View, StyleSheet, useWindowDimensions } from "react-native";

import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";

function NumberContainer({ children }) {
  const { width, height } = useWindowDimensions();

  const containerRotated = height < 380 ? { padding: 12, margin: 12 } : { padding: 24, margin: 24 };
  const numberTextRotated = height < 380 ? { fontSize: 28 } : { fontSize: 36 };

  return (
    <View style={[styles.container, containerRotated]}>
      <Text style={[styles.numberText, numberTextRotated]}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.yellow,
    padding: Sizes.deviceWidth < 380 ? 12 : 24,
    margin: Sizes.deviceWidth < 380 ? 12 : 24,
    width: "50%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.yellow,
    fontSize: Sizes.deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
