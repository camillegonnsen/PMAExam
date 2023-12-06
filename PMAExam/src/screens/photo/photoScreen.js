import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CameraContext } from "../../services/Camera/camera.context";
import { PhotoView, ReturnButton, ButtonIcon } from "./photo.style";
import { StyleSheet} from "react-native";

export const PhotoScreen = ({ navigation }) => {
  const { uri } = useContext(CameraContext);

  return (
    <>
      <PhotoView source={{ uri: uri, isStatic: true }} />
      <ReturnButton onPress={() => navigation.navigate("Camera")}>
        <Ionicons style={styles.icon} name="ios-arrow-back" size={24} color="white" />
      </ReturnButton>
    </>
  );
};



const styles = StyleSheet.create({
  icon:{
    marginLeft:10,
  },

});
