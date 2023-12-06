import React from "react";
import { Text, TouchableOpacity } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import { AppNavigator } from "../infrastructure/navigation/app.navigator.js";
import { CameraContextProvider } from "../services/camera/camera.context.js";


export const Add = () => {
  return (
    
    <>
      <Text>Add visited attraction</Text>
      <AppNavigator/>
      <StatusBar style="auto" />
    </>
  );
};
