import { View, Text, FlatList, Image, ImageSourcePropType } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import storyCarouselData from "../data/storyCarouselData";
import StoryCarouselItem from "./StoryCarouselItem";
import { CarouselItemProps } from "../types/commonTypes";

const StoryCarousel = () => {
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (flatListRef.current) {
        let nextIndex = (currentIndex + 1) % storyCarouselData.length;
        setCurrentIndex(nextIndex);
        flatListRef.current.scrollToIndex({
          animated: true,
          index: nextIndex,
        });
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const renderItem = ({ item }: { item: CarouselItemProps }) => {
    return <StoryCarouselItem item={item} />;
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={storyCarouselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width
          );
          setCurrentIndex(newIndex);
        }}
      />
    </View>
  );
};

export default StoryCarousel;
