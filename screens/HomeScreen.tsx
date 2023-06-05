import { View, Text } from "react-native";
import MainCarousel from "../components/MainCarousel";
import StoryCarousel from "../components/StoryCarousel";

const HomeScreen: React.FC = () => {
  return (
    <View>
      <StoryCarousel />
      <MainCarousel />
    </View>
  );
};

export default HomeScreen;
