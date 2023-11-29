import styled from "styled-components/native";
import { Camera } from "expo-camera"
import { Ionicons } from "@expo/vector-icons";

export const CameraViewS = styled(Camera)`
    flex: 1;
    align-items: center;
`;

export const ButtonsView = styled.View`
    position: absolute;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 6;
`;

export const BigButton = styled.TouchableOpacity`
    width: 5;
    height: 5;
    border-radius: 5;
    border-width: 1;
    background-color: white;
    border-color: lightblue;
`;

export const SmallButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 4;
    height: 4};
    border-radius: 4};
    border-color: lightblue;
`;

export const ButtonIcon = styled(Ionicons).attrs({
    size: 32,
    color: blue,
})``;

export const SnackbarText = styled.Text`
    color: red;
`;