import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Component = () => {
  return (
    <View style={styles.menuBar}>
    <View style={styles.menuBox} />
    <Image
      style={styles.mapFILL0Wght400GRAD0Opsz48Icon}
      resizeMode="cover"
      source={require("../assets/map-fill0-wght400-grad0-opsz48-1-1.png")}
    />
    <Text style={styles.explore}>Explore</Text>
    <Image
      style={styles.localLibraryFILL0Wght400GRIcon}
      resizeMode="cover"
      source={require("../assets/local-library-fill0-wght400-grad0-opsz48-3.png")}
    />
    <Text style={styles.discover}>Discover</Text>
    <Image
      style={styles.favoriteFILL0Wght400GRAD0OIcon}
      resizeMode="cover"
      source={require("../assets/favorite-fill0-wght400-grad0-opsz48-1.png")}
    />
    <Text style={styles.favorites}>Favorites</Text>
    <Image
      style={styles.settingsFILL0Wght400GRAD0OIcon}
      resizeMode="cover"
      source={require("../assets/settings-fill0-wght400-grad0-opsz48-3.png")}
    />
    <Text style={styles.settings}>Settings</Text>
  </View>
  );
};

const styles = StyleSheet.create({
    menuBox: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 24,
        elevation: 24,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "#fff",
        borderWidth: 1,
    },
    mapFILL0Wght400GRAD0Opsz48Icon: {
        position: "absolute",
        top: 11,
        left: 39,
        width: 31,
        height: 31,
        overflow: "hidden",
    },
    explore: {
        position: "absolute",
        marginTop: 10.5,
        top: "50%",
        left: 31,
        fontSize: 12,
        fontFamily: "Inter",
        color: "#000",
        textAlign: "center",
        width: 46,
        height: 13,
    },
    localLibraryFILL0Wght400GRIcon: {
        position: "absolute",
        top: 11,
        left: 123,
        width: 31,
        height: 31,
        overflow: "hidden",
    },
    discover: {
        position: "absolute",
        marginTop: 9.5,
        marginLeft: -80,
        top: "50%",
        left: "50%",
        fontSize: 12,
        fontFamily: "Inter",
        color: "#000",
        textAlign: "center",
        width: 76,
        height: 13,
    },
    favoriteFILL0Wght400GRAD0OIcon: {
        position: "absolute",
        top: 13,
        left: 212,
        width: 31,
        height: 31,
        overflow: "hidden",
    },
    favorites: {
        position: "absolute",
        marginTop: 10.5,
        marginLeft: 17,
        top: "50%",
        left: "50%",
        fontSize: 12,
        fontFamily: "Inter",
        color: "#000",
        textAlign: "center",
        width: 60,
        height: 13,
    },
    settingsFILL0Wght400GRAD0OIcon: {
        position: "absolute",
        top: 11,
        left: 292,
        width: 33,
        height: 33,
        overflow: "hidden",
    },
    settings: {
        position: "absolute",
        marginTop: 10.5,
        marginLeft: 103,
        top: "50%",
        left: "50%",
        fontSize: 12,
        fontFamily: "Inter",
        color: "#000",
        textAlign: "center",
        width: 50,
        height: 13,
    },
    menuBar: {
        position: "absolute",
        top: 723,
        left: -1,
        width: 360,
        height: 77,
    },
});

export default Component;