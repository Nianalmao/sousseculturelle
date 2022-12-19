import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Component = () => {
  return (
    <View style={styles.searchResultSTFCC}>
    <Image
      style={styles.lineIcon3}
      resizeMode="cover"
      source={require("../assets/line-6.png")}
    />
    <Image
      style={styles.locateIcon2}
      resizeMode="cover"
      source={require("../assets/locate.png")}
    />
    <Text style={styles.stFelixCatholicChurch}>
      St. Felix Catholic Church
    </Text>
    <Text style={styles.sousseCatholicChurch}>Sousse, Catholic Church</Text>
    <Image
      style={styles.churchFILL0Wght400GRAD0OpsIcon}
      resizeMode="cover"
      source={require("../assets/church-fill0-wght400-grad0-opsz48-1.png")}
    />
  </View>
  );
};

const styles = StyleSheet.create({
    lineIcon3: {
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
    locateIcon2: {
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
    stFelixCatholicChurch: {
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
    sousseCatholicChurch: {
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
    churchFILL0Wght400GRAD0OpsIcon: {
        position: "absolute",
        height: "48.28%",
        width: "10.56%",
        top: "13.79%",
        right: "89.44%",
        bottom: "37.93%",
        left: "0%",
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
    },
    searchResultSTFCC: {
        position: "absolute",
        top: 180,
        left: 28,
        width: 332,
        height: 73,
    },
});

export default Component;