import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { WishListProps } from "../types/commonTypes";

const { width } = Dimensions.get("window");

const WishListItemCard = ({ item }: WishListProps) => {
  return (
    <View style={styles.container}>
      {item.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.img} style={styles.image} />
          <View>
            <Text>{item.title}</Text>
            <Text>£{item.price}</Text>
            <Text style={styles.remove}>Remove</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default WishListItemCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 10,
    borderColor: "pink",
    borderWidth: 4,
    borderRadius: 10,
  },
  card: {
    flexDirection: "row",
    gap: 20,
    width: width,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
  remove: {
    color: "red",
    fontWeight: "bold",
    textAlign: "left",
    paddingTop: 10,
    fontStyle: "italic",
  },
});
