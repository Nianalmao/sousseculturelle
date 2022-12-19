import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
//import { LinearGradient } from "expo-linear-gradient";

const Component = () => {
  return (
    <View style={styles.bgImage}>
        <View style={styles.video}>
          <Image
            style={styles.image1Icon}
            resizeMode="cover"
            //source={require("../assets/image-1.png")}
          />
          {/* <LinearGradient
            style={styles.rectangleLinearGradient}
            locations={[0, 0.97]}
            colors={["rgba(0, 0, 0, 0)", "#000"]}
          /> */}
          <Image
            style={styles.playCircleFILL0Wght400GRADIcon}
            resizeMode="cover"
            //source={require("../assets/play-circle-fill0-wght400-grad0-opsz48-2.png")}
          />
        </View>
        <Image
          style={styles.starsIcon}
          resizeMode="cover"
          //source={require("../assets/stars.png")}
        />
        <Image
          style={styles.exploreButtonIcon}
          resizeMode="cover"
          //source={require("../assets/explorebutton.png")}
        />
        <View style={styles.overviewTab}>
          <Text style={styles.overview}>Overview</Text>
          <View style={styles.lineView} />
        </View>
        <View style={styles.imagesTab}>
          <Text style={styles.images}>Images</Text>
          <View style={styles.lineView1} />
        </View>
        <View style={styles.videoTab}>
          <Text style={styles.video1}>Video</Text>
          <View style={styles.lineView2} />
        </View>
        <View style={styles.infoTab}>
          <Text style={styles.info}>Info</Text>
          <View style={styles.lineView3} />
        </View>
        <Image
          style={styles.searchButtonIcon}
          resizeMode="cover"
          //source={require("../assets/searchbutton.png")}
        />
        <Image
          style={styles.heartButtonIcon}
          resizeMode="cover"
          //source={require("../assets/heartbutton.png")}
        />
        <Image
          style={styles.returnButtonIcon}
          resizeMode="cover"
          //source={require("../assets/returnbutton.png")}
        />
      </View>
  );
};

const styles = StyleSheet.create({
    video: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "0%",
      },
      starsIcon: {
        position: "absolute",
        top: 191,
        left: 21,
        width: 85,
        height: 18,
      },
      exploreButtonIcon: {
        position: "absolute",
        top: 110,
        left: 299,
        width: 41,
        height: 41,
        overflow: "hidden",
      },
      overview: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0%",
        left: "0%",
        fontSize: 13,
        //fontFamily: "Inter",
        color: "#fff",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
      },
      lineView: {
        position: "absolute",
        height: "3.23%",
        width: "79.66%",
        top: "85.48%",
        right: "11.02%",
        bottom: "11.29%",
        left: "9.32%",
        borderStyle: "solid",
        borderColor: "#2e7cf1",
        borderTopWidth: 1,
      },
      overviewTab: {
        position: "absolute",
        top: 219,
        left: 42,
        width: 59,
        height: 31,
      },
      images: {
        position: "absolute",
        top: "0%",
        left: "0%",
        fontSize: 13,
        //fontFamily: "Inter",
        color: "#fff",
        textAlign: "left",
      },
      lineView1: {
        position: "absolute",
        height: "5%",
        width: "73.33%",
        top: "97.5%",
        right: "14.44%",
        bottom: "-2.5%",
        left: "12.22%",
        borderStyle: "solid",
        borderColor: "rgba(46, 124, 241, 0)",
        borderTopWidth: 1,
      },
      imagesTab: {
        position: "absolute",
        top: 226,
        left: 130,
        width: 45,
        height: 20,
      },
      video1: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0%",
        left: "0%",
        fontSize: 13,
        fontFamily: "Inter",
        color: "#fff",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
      },
      lineView2: {
        position: "absolute",
        height: "3.23%",
        width: "72.97%",
        top: "85.48%",
        right: "14.86%",
        bottom: "11.29%",
        left: "12.16%",
        borderStyle: "solid",
        borderColor: "rgba(46, 124, 241, 0)",
        borderTopWidth: 1,
      },
      videoTab: {
        position: "absolute",
        top: 219,
        left: 212,
        width: 37,
        height: 31,
      },
      info: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0%",
        left: "0%",
        fontSize: 13,
        fontFamily: "Inter",
        color: "#fff",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
      },
      lineView3: {
        position: "absolute",
        height: "3.23%",
        width: "79.17%",
        top: "85.48%",
        right: "14.58%",
        bottom: "11.29%",
        left: "6.25%",
        borderStyle: "solid",
        borderColor: "rgba(46, 124, 241, 0)",
        borderTopWidth: 1,
      },
      infoTab: {
        position: "absolute",
        top: 220,
        left: 291,
        width: 24,
        height: 31,
      },
      searchButtonIcon: {
        position: "absolute",
        top: 10,
        left: 313,
        width: 37,
        height: 37,
        overflow: "hidden",
      },
      heartButtonIcon: {
        position: "absolute",
        top: 155,
        left: 299,
        width: 41,
        height: 41,
        overflow: "hidden",
      },
      returnButtonIcon: {
        position: "absolute",
        top: 15,
        left: 17,
        width: 20,
        height: 20,
        overflow: "hidden",
      },
      bgImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 360,
        height: 260,
      },
});

export default Component;
