import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Component = () => {
  return (
    <View style={styles.searchResultCOS}>
        <Image
          style={styles.lineIcon1}
          resizeMode="cover"
          source={require("../assets/line-6.png")}
        />
        <Image
          style={styles.locateIcon3}
          resizeMode="cover"
          source={require("../assets/locate.png")}
        />
        <Text style={styles.catacombsOfSeverus}>Catacombs of Severus</Text>
        <Text style={styles.sousseRomanMonument}>Sousse, Roman Monument</Text>
        <Image
          style={styles.stadiumFILL0Wght400GRAD200Icon}
          resizeMode="cover"
          source={require("../assets/stadium-fill0-wght400-grad200-opsz48-1.png")}
        />
      </View>
  );
};

const styles = StyleSheet.create({
    lineIcon1: {
        position: "absolute",
        height: "1.38%",
        width: "86.62%",
        top: "99.31%",
        right: "-0.15%",
        bottom: "-0.69%",
        left: "13.53%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    locateIcon3: {
        position: "absolute",
        height: "46.9%",
        width: "10.53%",
        top: "23.45%",
        right: "9.17%",
        bottom: "29.66%",
        left: "80.3%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    catacombsOfSeverus: {
        position: "absolute",
        height: "57.93%",
        width: "63.76%",
        top: "0%",
        left: "15.34%",
        fontSize: 16,
        fontFamily: "Inter",
        color: "#000",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
    },
    sousseRomanMonument: {
        position: "absolute",
        height: "19.31%",
        width: "55.04%",
        top: "52.41%",
        left: "16.24%",
        fontSize: 12,
        fontFamily: "Inter",
        color: "#b0b0b0",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
    },
    stadiumFILL0Wght400GRAD200Icon: {
        position: "absolute",
        height: "52.41%",
        width: "11.43%",
        top: "11.03%",
        right: "88.57%",
        bottom: "36.55%",
        left: "0%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    searchResultCOS: {
        position: "absolute",
        top: 262,
        left: 27,
        width: 333,
        height: 73,
    },
});

export default Component;