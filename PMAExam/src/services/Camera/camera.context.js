import React, { createContext, useEffect, useState } from "react";
import { CameraType } from "expo-camera";

import { hasCameraPermission, snapAndSavePhoto } from "./camera.service";

export const CameraContext = createContext();

export const CameraContextProvider = ({ children }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.front);
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    (async () => {
      const permission = await hasCameraPermission();
      setHasPermission(permission);
    })();
  }, []);

  const toggleCamera = () => {
    const newType =
      type === CameraType.back ? CameraType.front : CameraType.back;
    setType(newType);
  };

  const snapAndSave = async () => {
    if (hasPermission) {
      let asset = await snapAndSavePhoto(camera);
      setPhotoList((prevList) => [...prevList, asset.localUri]);
    }
  };

  const resetPhotoList = () => {
    setPhotoList([]);
  };

  return (
    <CameraContext.Provider
      value={{ type, photoList, setCamera, toggleCamera, snapAndSave, resetPhotoList}}
    >
      {children}
    </CameraContext.Provider>
  );
};



