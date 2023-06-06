import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WishlistItems from "../components/WishlistItems";

const WishlistScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Your Wishlist:</Text>
      <WishlistItems />
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#FF1493",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
});
