import React, { useContext } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { Feather, EvilIcons, Ionicons   } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { Screen1 } from "../../screens/Screen1";
import { Screen2 } from "../../screens/Screen2";
import { Screen3 } from "../../screens/Screen3";
import { ProfileScreen } from "../../screens/ProfileScreen";
import { Add }     from "../../screens/Add";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Overview: "eye-outline",
  Map: "map-outline",
  Leaderboard: "trophy-outline",
  Profile: "person-outline"
};

const tabBarIcon =(iconName) =>({ size, color }) =><Ionicons   name={iconName} size={size} color={color}/>;


const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  const { onLogout } = useContext(AuthenticationContext);



  return {
    headerShown: true,
    tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: "#688A6F",
    tabBarInactiveTintColor: "black",
    tabBarStyle: {
      backgroundColor: '#E9E9E9', // Set the background color of the bottom navigation bar
    },
    tabBarLabelStyle: {
      fontSize: 10, // Set the font size for the label
      fontWeight: route.state?.index === route.key ? 'bold' : 'normal', // Set font weight to bold when active
    },
    tabBarLabel: ({ focused, color }) => (
      <Text style={{ fontSize: 12, fontWeight: focused ? 'bold' : 'normal', color }}>
        {route.name}
      </Text>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={onLogout} style={{ marginRight: 10 }}>
        <Text style={{ color: "#2182BD" }}>Logout</Text>
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: '#ebe2d9', // Set the background color of the header
    
    },
    headerTintColor: '#688A6F', // Set the text color of the header buttons
    headerTitleStyle: {
      fontSize: 25, // Set the font size of the header title
    },
  };
};



export const AppNavigator = () => (
  
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Overview" component={Screen1}/>
    <Tab.Screen name="Map" component={Screen2} />
    <Tab.Screen name={"Add"} component={Add} Label={"Add"}options={{
          tabBarLabel: () => null, // Hide the label in the bottom nav bar
          headerTitle: "Add visited attraction", // Set the label for the header
          tabBarIcon: ({ focused }) => (
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: '#FFBAD7',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 50 : 30
              }}>
                <Feather name="plus" size={35} color="white"/>
              </View>
          )
        }}></Tab.Screen>
    <Tab.Screen name="Leaderboard" component={Screen3}/>
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);