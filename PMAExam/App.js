import React from "react";

import { StatusBar } from "expo-status-bar";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {


  return (
    <>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
