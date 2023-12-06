import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";


export const PhotoView = styled.Image`
  flex: 1;
  align-items: center;
`;

export const ReturnButton = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  top: 100px;
  left: 100px;
  margin-top: 100px;
  margin-left: 100px;
`;

export const ButtonIcon = styled(Ionicons).attrs({
  size: 32,
  color: "white",
})``;
