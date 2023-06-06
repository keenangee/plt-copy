import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopItemCard from "./TopItemCard";
import clothingListData from "../data/clothingListData";

const TopItems = () => {
  return (
    <View>
      <Text style={styles.header}>This weeks faves!</Text>
      <TopItemCard data={clothingListData} />
    </View>
  );
};

export default TopItems;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
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
