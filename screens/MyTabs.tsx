import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Icon from "react-native-vector-icons/Octicons";
import Icon1 from "react-native-vector-icons/SimpleLineIcons";

import ShopScreen from "./ShopScreen";
import BagScreen from "./BagScreen";
import WishlistScreen from "./WishlistScreen";

const Tab = createBottomTabNavigator();

const MyTabs: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "PRETTYLITTLETHING",
          tabBarIcon: () => <Icon name="home" color="#f4b9d4" size={25} />,
          tabBarLabel: () => <Text style={styles.navText}>Home</Text>,
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          title: "PRETTYLITTLETHING",
          tabBarIcon: () => <Icon name="search" color="#f4b9d4" size={25} />,
          tabBarLabel: () => <Text style={styles.navText}>Shop</Text>,
        }}
      />
      <Tab.Screen
        name="Bag"
        component={BagScreen}
        options={{
          title: "PRETTYLITTLETHING",
          tabBarIcon: () => <Icon1 name="handbag" color="#f4b9d4" size={25} />,
          tabBarLabel: () => <Text style={styles.navText}>Bag</Text>,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          title: "PRETTYLITTLETHING",
          tabBarIcon: () => <Icon name="heart" color="#f4b9d4" size={25} />,
          tabBarLabel: () => <Text style={styles.navText}>Wishlist</Text>,
        }}
      />
      <Tab.Screen
        name="My PLT"
        component={ShopScreen}
        options={{
          title: "PRETTYLITTLETHING",
          tabBarIcon: () => <Icon name="person" color="#f4b9d4" size={25} />,
          tabBarLabel: () => <Text style={styles.navText}>My PLT</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;

const styles = StyleSheet.create({
  navText: {
    color: "#f4b9d4",
    fontSize: 12,
    fontWeight: "bold",
  },
});
