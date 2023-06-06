import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TopItemAsItemProps } from "../types/commonTypes";

const TopItemCard = ({ data }: TopItemAsItemProps) => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.img} style={styles.image} />
          <Text>£{item.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default TopItemCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    backgroundColor: "white",
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
    width: 150,
    height: 200,
    marginVertical: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
});
