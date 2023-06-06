import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import wishlistData from "../data/wishlistData";
import WishListItemCard from "./WishListItemCard";

const WishlistItems = () => {
  return (
    <View>
      <WishListItemCard item={wishlistData} />
    </View>
  );
};

export default WishlistItems;

const styles = StyleSheet.create({});
