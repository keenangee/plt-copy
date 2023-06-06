import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Octicons";

const MyPltScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Icon name="person" size={100} color="#FF1493" style={styles.icon} />
        <Text style={styles.text}>Login in</Text>
      </View>
    </View>
  );
};

export default MyPltScreen;

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
