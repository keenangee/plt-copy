import { View, Text, ScrollView } from "react-native";
import MainCarousel from "../components/MainCarousel";
import StoryCarousel from "../components/StoryCarousel";
import TopItems from "../components/TopItems";

const HomeScreen: React.FC = () => {
  return (
    <ScrollView>
      <StoryCarousel />
      <MainCarousel />
      <TopItems />
    </ScrollView>
  );
};

export default HomeScreen;
