/* Inspired by: https://github.com/fabricionarcizo/pma2023 */

import React, { createContext, useEffect, useState } from 'react';
import { CameraType } from "expo-camera";

import { cameraPermission, takePictureAndSave } from "./camera.service";

export const CameraContext = createContext();

export const CameraContextProvider = ({ children }) => {
    const [hasPermission, setPermission] = usesState(false);
    const [camera, setCamera] = useState(null);
    const [cameraSwitch, setCameraSwitch] = useState(CameraType.front);
    const [uri, setUri] = useState(null);

    /* useEffect(<function>, <dependency>) */
    useEffect( () => {
        (async () => {
            const permissions = await cameraPermission();
            setPermission(permissions);
        }) ();
    }, []); // [] so it doesn't run on every render

    /* The user can decide if they want to use front or back camera */
    const switchCamera = () => {
        const newSwitch =
            cameraSwitch === CameraType.back ? CameraType.front : CameraType.back;
        setCameraSwitch(newSwitch);
    };

    const takePicture = async () => {
        if (hasPermission) {
            let assets = await takePictureAndSave(camera);
            setUri(assets.localUri); // save the picture with local uri
        }
    };

    return (
        <CameraContext.Provider value={{ cameraSwitch, uri, setCamera, switchCamera, takePicture }} >    
            {children}
        </CameraContext.Provider>
    )
}

