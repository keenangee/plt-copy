import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./screens/MyTabs";

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    color: "#f4b9d4",
  },
});
