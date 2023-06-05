import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import React from "react";
import { PaginationProps } from "../types/commonTypes";

const { width } = Dimensions.get("screen");

interface PaginationPropsWithScrollX extends PaginationProps {
  scrollX: Animated.Value;
}

const Pagination = ({ data, scrollX }: PaginationPropsWithScrollX) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth }]}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#ccc",
  },
});
