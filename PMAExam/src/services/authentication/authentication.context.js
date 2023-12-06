import React, { useEffect, useState, createContext, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../../firebaseConfig";
import { loginRequest, registerUser } from "./authentication.service";
import { CameraContext } from "../camera/camera.context";


export const AuthenticationContext = createContext();


export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const cameraContext = useContext(CameraContext);

  useEffect(() => {
    const fetchData = async () => {
      onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          setUser(authUser);
        }
        setIsLoading(false);
      });
    };

    fetchData();
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Password do not match");
      setIsLoading(false);
      return;
    }
    registerUser(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    cameraContext.resetPhotoList();    
    auth.signOut();
  };

  return (
  
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
   
  );
};
