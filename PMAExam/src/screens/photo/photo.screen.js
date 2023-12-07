import React, { useContext } from "react";
import { StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CameraContext } from "../../services/camera/camera.context";
import { PhotoView, ReturnButton} from "./photo.style";


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