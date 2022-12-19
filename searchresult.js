import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Component = () => {
  return (
    <View style={styles.searchResult}>
        <View style={styles.frame} />
        <Image
          style={styles.monumentTypeIcon}
          resizeMode="cover"
          source={require("../assets/monument-type.png")}
        />
        <Text style={styles.address}>Sousse, Festival</Text>
        <Text style={styles.title}>Carnival of Awussu</Text>
        <Image
          style={styles.locateIcon}
          resizeMode="cover"
          source={require("../assets/locate.png")}
        />
        <Image
          style={styles.lineIcon}
          resizeMode="cover"
          source={require("../assets/line-6.png")}
        />
      </View>
  );
};
const styles = StyleSheet.create({
  frame: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "rgba(217, 217, 217, 0.01)",
  },
  monumentTypeIcon: {
    position: "absolute",
    top: 10,
    left: 3,
    width: 37,
    height: 37,
    overflow: "hidden",
  },
  address: {
    position: "absolute",
    top: 38,
    left: 56,
    fontSize: 12,
    fontFamily: "Inter",
    color: "#b0b0b0",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 183,
    height: 14,
  },
  title: {
    position: "absolute",
    top: 0,
    left: 53,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 212,
    height: 42,
  },
  locateIcon: {
    position: "absolute",
    top: 19,
    left: 269,
    width: 35,
    height: 34,
  },
  lineIcon: {
    position: "absolute",
    top: 74,
    left: 47,
    width: 288,
    height: 1,
  },
  searchResult: {
    position: "absolute",
    top: 424,
    left: 25,
    width: 309,
    height: 67,
  },
});

export default Component;