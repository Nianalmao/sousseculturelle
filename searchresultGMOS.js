import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Component = () => {
  return (
    <View style={styles.searchResultGMOS}>
    <Image
      style={styles.lineIcon2}
      resizeMode="cover"
      source={require("../assets/line-6.png")}
    />
    <Text style={styles.greatMosqueOfSousse}>Great Mosque Of Sousse</Text>
    <Image
      style={styles.locateIcon1}
      resizeMode="cover"
      source={require("../assets/locate.png")}
    />
    <Text style={styles.sousseIslamicMonument}>
      Sousse, Islamic Monument
    </Text>
    <Image
      style={styles.mosqueFILL0Wght400GRAD200OIcon}
      resizeMode="cover"
      source={require("../assets/mosque-fill0-wght400-grad200-opsz48-1.png")}
    />
  </View>
  );
};
const styles = StyleSheet.create({
    lineIcon2: {
        position: "absolute",
        height: "1.34%",
        width: "86.62%",
        top: "99.33%",
        right: "-0.15%",
        bottom: "-0.67%",
        left: "13.53%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    greatMosqueOfSousse: {
        position: "absolute",
        height: "56.38%",
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
    locateIcon1: {
        position: "absolute",
        height: "45.64%",
        width: "10.53%",
        top: "17.45%",
        right: "9.17%",
        bottom: "36.91%",
        left: "80.3%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    sousseIslamicMonument: {
        position: "absolute",
        height: "18.79%",
        width: "55.04%",
        top: "51.01%",
        left: "16.24%",
        fontSize: 12,
        fontFamily: "Inter",
        color: "#b0b0b0",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
    },
    mosqueFILL0Wght400GRAD200OIcon: {
        position: "absolute",
        height: "49.66%",
        width: "11.13%",
        top: "16.11%",
        right: "88.87%",
        bottom: "34.23%",
        left: "0%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    searchResultGMOS: {
        position: "absolute",
        top: 96,
        left: 27,
        width: 333,
        height: 75,
      },
});

export default Component;