import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Icon from "react-native-vector-icons/Octicons";
import Icon1 from "react-native-vector-icons/SimpleLineIcons";

import ShopScreen from "./ShopScreen";
import BagScreen from "./BagScreen";
import WishlistScreen from "./WishlistScreen";
import MyPltScreen from "./MyPltScreen";

const Tab = createBottomTabNavigator();

const MyTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f4b9d4",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "YOURSHOP",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={25} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={(styles.navText, { color })}>Home</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          title: "YOURSHOP",
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={25} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={(styles.navText, { color })}>Shop</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={BagScreen}
        options={{
          title: "YOURSHOP",
          tabBarIcon: ({ color }) => (
            <Icon1 name="handbag" color={color} size={25} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={(styles.navText, { color })}>Bag</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          title: "YOURSHOP",
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={25} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={(styles.navText, { color })}>Wishlist</Text>
          ),
        }}
      />
      <Tab.Screen
        name="My PLT"
        component={MyPltScreen}
        options={{
          title: "YOURSHOP",
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={25} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={(styles.navText, { color })}>My PLT</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;

const styles = StyleSheet.create({
  navText: {
    color: "",
    fontSize: 12,
    fontWeight: "bold",
  },
});
