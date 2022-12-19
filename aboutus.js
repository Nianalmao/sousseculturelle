import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Component = () => {
  return (
    <View style={styles.aboutUs1}>
    <Text style={styles.aboutUs}>About us</Text>
    <Image
      style={styles.infoFILL0Wght400GRAD0Opsz4Icon}
      resizeMode="cover"
      source={require("../assets/info-fill0-wght400-grad0-opsz48-1-1.png")}
    />
  </View>
  );
};

const styles = StyleSheet.create({

});

export default Component;