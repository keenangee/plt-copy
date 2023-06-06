import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const SearchBar = () => {
  return (
    <View>
      <TextInput placeholder="Search" style={styles.searchBar} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    marginHorizontal: 10,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
