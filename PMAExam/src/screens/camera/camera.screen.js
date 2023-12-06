import React, { useContext, useState } from "react";
import { Platform } from "react-native";
import { Snackbar } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";


import { CameraContext } from "../../services/camera/camera.context";


import {
  CameraView,
  ButtonsView,
  BigButton,
  SmallButton,
  ButtonIcon,
  SnackbarText,
} from "./Camera.style";

export const CameraScreen = ({ navigation }) => {
  const isAndroid = Platform.OS === "android";
  const isFocused = useIsFocused();

  const [visible, setVisible] = useState(false);

  const {type, photoList, setCamera, toggleCamera, snapAndSave, resetPhotoList} =
    useContext(CameraContext);

  const savingPhoto = () => {
    setVisible(true);
    snapAndSave();

    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  return (
    <>
      {isFocused && (
        <CameraView
          ref={(ref) => setCamera(ref)}
          type={type}
          useCamera2Api={isAndroid}
          ratio="2:1"
        >
          <ButtonsView>
            <SmallButton onPress={() => toggleCamera()}>
              <ButtonIcon name="camera-reverse-outline" />
            </SmallButton>

            <BigButton onPress={() => savingPhoto()} />

            <SmallButton
              disabled={ photoList? false : true}
              onPress={() => navigation.navigate("Profile")}
            >
              <ButtonIcon name="albums-outline" />
            </SmallButton>
          </ButtonsView>
          <Snackbar visible={visible}>
            <SnackbarText>Image successfully saved!</SnackbarText>
          </Snackbar>
        </CameraView>
      )}
    </>
  );
};
