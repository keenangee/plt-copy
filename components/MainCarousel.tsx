import {
  View,
  Text,
  FlatList,
  Image,
  ImageSourcePropType,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import mainCarouselData from "../data/mainCarouselData";
import MainCarouselItem from "./MainCarouselItem";
import { CarouselItemProps } from "../types/commonTypes";
import Pagination from "./Pagination";

const MainCarousel = () => {
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: any) => {
    Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
      useNativeDriver: false,
    })(event);
  };

  const handleMomentScrollEnd = (event: any) => {
    (event: any) => {
      const newIndex = Math.round(
        event.nativeEvent.contentOffset.x /
          event.nativeEvent.layoutMeasurement.width
      );
      setCurrentIndex(newIndex);
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (flatListRef.current) {
        let nextIndex = (currentIndex + 1) % mainCarouselData.length;
        setCurrentIndex(nextIndex);
        flatListRef.current.scrollToIndex({
          animated: true,
          index: nextIndex,
        });
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const renderItem = ({ item }: { item: CarouselItemProps }) => {
    return <MainCarouselItem item={item} />;
  };
  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={mainCarouselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        onScroll={handleOnScroll}
        onMomentumScrollEnd={handleMomentScrollEnd}
      />
      <Pagination data={mainCarouselData} scrollX={scrollX} />
    </View>
  );
};

export default MainCarousel;
