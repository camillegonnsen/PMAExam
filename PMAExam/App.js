import React from "react";

import { StatusBar } from "expo-status-bar";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";
import { CameraContextProvider } from "./src/services/camera/camera.context";

export default function App() {

  //Hellooo


  //Heeej fra Anna
  return (
    <>
        <CameraContextProvider>
          <AuthenticationContextProvider>
            <Navigation />
          </AuthenticationContextProvider>
        </CameraContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
