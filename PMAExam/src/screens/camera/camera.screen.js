import React, { useContext, useState } from "react";
import { ButtonsView, CameraViewS, SmallButton, BigButton, ButtonIcon, SnackbarText } from "./camera.style.js";
import { Snackbar } from "react-native-paper"; // pop-up
import { Platform } from "react-native";
import { CameraContext } from "../../services/camera/camera.context.js";
import { useIsFocused } from "@react-navigation/native";



export const CameraView = ({ navigation }) => {
    /* Make it work for both Android and IOS */
    const isAndroid = Platform.OS === "android";
    const isFocused = useIsFocused();

    const [ hidden, setVisible ] = useState(false);
    
    // parameters from camera.context.js
    const {cameraview, uri, setCamera, switchCamera, takePicture } = useContext(CameraContext);

    const savingPhoto = () => {
        setVisible(true);
        takePicture();
        setTimeout(() => { setVisible(false); }, 2000);
    };

    return (
        <>
            {isFocused && (
                <CameraViewS ref={(ref) => setCamera(ref)}
                    type={cameraview}
                    useCcamera2api={isAndroid}
                    ratio="2:1"
                >
                {/* The three buttons: switch camera, take photo, access library */}
                <ButtonsView>
                    <SmallButton onPress={() => switchCamera()}> 
                        <ButtonIcon name="camera-reverse-outline" />
                    </SmallButton>
                    
                    <BigButton onPress={() => savingPhoto()}/>
                    
                    <SmallButton 
                        disabled={uri ? false : true}
                        onPress={() => navigation.navigate("Photo")}
                    >
                        <ButtonIcon name="albums-outline" />
                    </SmallButton>
                </ButtonsView>

                {/* Give feedback when photo succesfully added */}
                <Snackbar visible={hidden}>
                    <SnackbarText>Image sucessfully saved!</SnackbarText>
                </Snackbar>

                </CameraViewS>
            )}
        </>
    );

}
