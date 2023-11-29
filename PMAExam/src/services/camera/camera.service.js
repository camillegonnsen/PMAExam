/* camera.service.js provides methods for requesting permissions
   to access the users camera. 
   
   Inspired by: https://github.com/fabricionarcizo/pma2023 */


import { Camera } from "expo-camera"; 
import * as MediaLibrary from "expo-media-library";

/* Ask the user for permission to acces the camera resource */
export const cameraPermission = async () => {
    /* Permission to camera */
    let { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
        if ( cameraStatus !== "granted" ) {
            console.log("Camera permission denied.");
            return false;
        }
    
    /* Permission to library */
    let { status: libraryStatus } = await MediaLibrary.requestLibraryPermissionsAsync();
        if ( libraryStatus !== "granted" ) {
            console.log("Library permission denied");
            return false;
        }
    
    return true;
};

/*  Capture a frame for the picture.
    MediaLibrary save the image in the camera roll */
export const takePictureAndSave = async (camera) => {
    const albumName = "yourAlbum";
    const { uri } = await camera.takePictureAsync();            // take picture
    const assest = await MediaLibrary.createAssistAsync(uri);   // save picture
    let album = await MediaLibrary.getAlbumAsync(albumName);    // into album

    if (!album) {
        await MediaLibrary.createAlbumAsync(albumName, assest);
    } else {
        await MediaLibrary.addAssistToAlbumAsync(albumName, assest);
    }

    return await MediaLibrary.getAssetInfoAsync(assest.id);
};