import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { Screen1 } from "../../screens/Screen1";
import { Screen2 } from "../../screens/Screen2";
import { Screen3 } from "../../screens/Screen3";
import { Screen4 } from "../../screens/Screen4";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Overview: "eye",
  Map: "map",
  Favorites: "heart",
  Profile: "user"
};

const tabBarIcon =(iconName) =>({ size, color }) =><Feather name={iconName} size={size} color={color} />;


const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  const { onLogout } = useContext(AuthenticationContext);

  return {
    headerShown: true,
    tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: "#2182BD",
    tabBarInactiveTintColor: "gray",
    headerRight: () => (
      <TouchableOpacity onPress={onLogout} style={{ marginRight: 10 }}>
        <Text style={{ color: "#2182BD" }}>Logout</Text>
      </TouchableOpacity>
    ),
  };
};

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Overview" component={Screen1}/>
    <Tab.Screen name="Map" component={Screen2} />
    <Tab.Screen name="Favorites" component={Screen3} />
    <Tab.Screen name="Profile" component={Screen4} />
  </Tab.Navigator>
);
