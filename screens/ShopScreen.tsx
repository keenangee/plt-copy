import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopItems from "../components/TopItems";
import SearchBar from "../components/SearchBar";

const ShopScreen = () => {
  return (
    <ScrollView>
      <SearchBar />
      <TopItems />
    </ScrollView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({});
