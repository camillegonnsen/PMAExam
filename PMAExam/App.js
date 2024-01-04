import React from "react";

import { StatusBar } from "expo-status-bar";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";
import { LocationContextProvider } from "./src/services/location/location.context";


export default function App() {

  //Hellooo


  //Heeej fra Anna
  return (
    <><LocationContextProvider>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </LocationContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
