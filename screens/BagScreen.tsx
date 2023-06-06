import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon1 from "react-native-vector-icons/SimpleLineIcons";

const BagScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Icon1 name="handbag" size={100} color="#FF1493" style={styles.icon} />
        <Text style={styles.text}>Your bag is empty!</Text>
      </View>
    </View>
  );
};

export default BagScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  icon: {
    textAlign: "center",
    marginVertical: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF1493",
  },
});
