import React from "react";

import { StatusBar } from "expo-status-bar";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";
import { CameraContextProvider } from "./src/services/Camera/camera.context";

export default function App() {
  return (
    <><CameraContextProvider>
        <AuthenticationContextProvider>
          
            <Navigation />
          
        </AuthenticationContextProvider>
        </CameraContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
