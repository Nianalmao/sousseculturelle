import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Search = () => {
  return (
    <View style={styles.searchView}>
      <View style={styles.searchBoxView} />
      {/* <Image
        style={styles.searchIcon}
        resizeMode="cover"
        source={require("../assets/searchicon.png")}
      /> */}
      <Text style={styles.textBox}>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBoxView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 103,
    backgroundColor: "#e5f0f8",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  searchIcon: {
    position: "absolute",
    height: "84.09%",
    width: "11.14%",
    top: "11.36%",
    right: "81.93%",
    bottom: "4.55%",
    left: "6.93%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  textBox: {
    position: "absolute",
    height: "79.55%",
    width: "65.96%",
    top: "11.36%",
    right: "12.95%",
    bottom: "9.09%",
    left: "21.08%",
    fontSize: 16,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  searchView: {
    position: "absolute",
    transform: [
      {
        translateX: -166,
      },
    ],
    top: 27,
    left: "50%",
    width: 332,
    height: 44,
  },
});

export default Search;
