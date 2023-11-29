import React, { useContext, useState } from "react";
import { ButtonsView, CameraView, SmallButton, BigButton, ButtonIcon, SnackbarText } from "./camera.style";
import { Snackbar } from "react-native-paper"; // pop-up
import { CameraContext } from "../../services/camera/camera.context.js"
import { useIsFocused } from "@react-navigation/native";



export const CameraView = ({ navigation }) => {
    /* Make it work for both Android and IOS */
    const isAndroid = Platform.OS === "android";
    const isFocused = useIsFocused();

    const [ hidden, visible ] = useState(false);
    
    // parameters from camera.context.js
    const { cameraSwitch, uri, setCamera, switchCamera, takePicture } = useContext(CameraContext);

    const savingPhoto = () => {
        visible(true);
        takePicture();

        setTimeout(() => { visible(false); }, 2000);
    };

    return (
        <>
            {isFocused && (
                <CameraView ref={(ref) => setCamera(ref)}
                    type={cameraSwitch}
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
                <Snackbar visible={visible}>
                    <SnackbarText>Image sucessfully saved!</SnackbarText>
                </Snackbar>

                </CameraView>
            )}
        </>
    );

};