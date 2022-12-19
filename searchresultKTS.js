import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Component = () => {
  return (
    <View style={styles.searchResultKTS}>
    <Image
      style={styles.lineIcon4}
      resizeMode="cover"
      source={require("../assets/line-6.png")}
    />
    <Image
      style={styles.locateIcon4}
      resizeMode="cover"
      source={require("../assets/locate.png")}
    />
    <Text style={styles.ketherTorahSynagogue}>Kether Torah Synagogue</Text>
    <Text style={styles.sousseSynagogue}>Sousse, Synagogue</Text>
    <Image
      style={styles.synagogueFILL0Wght400GRAD20Icon}
      resizeMode="cover"
      source={require("../assets/synagogue-fill0-wght400-grad200-opsz48-1-1.png")}
    />
  </View>
  );
};

const styles = StyleSheet.create({
    lineIcon4: {
        position: "absolute",
        height: "1.38%",
        width: "86.88%",
        top: "99.31%",
        right: "-0.15%",
        bottom: "-0.69%",
        left: "13.27%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    locateIcon4: {
        position: "absolute",
        height: "46.9%",
        width: "10.56%",
        top: "23.45%",
        right: "9.2%",
        bottom: "29.66%",
        left: "80.24%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    ketherTorahSynagogue: {
        position: "absolute",
        height: "57.93%",
        width: "63.95%",
        top: "0%",
        left: "15.08%",
        fontSize: 16,
        fontFamily: "Inter",
        color: "#000",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
    },
    sousseSynagogue: {
        position: "absolute",
        height: "19.31%",
        width: "55.2%",
        top: "52.41%",
        left: "15.99%",
        fontSize: 12,
        fontFamily: "Inter",
        color: "#b0b0b0",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
    },
    synagogueFILL0Wght400GRAD20Icon: {
        position: "absolute",
        height: "49.66%",
        width: "10.86%",
        top: "12.41%",
        right: "89.14%",
        bottom: "37.93%",
        left: "0%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    searchResultKTS: {
        position: "absolute",
        top: 344,
        left: 28,
        width: 332,
        height: 73,
    },
});

export default Component;

