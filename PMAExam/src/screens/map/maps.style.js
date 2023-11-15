import styled from "styled-components/native";
import MapView from "react-native-maps";
import { IconButton, FAB, Text } from "react-native-paper";



export const Maps = styled(MapView)`
  width: 100%;
  height: 100%;
`;


export const MenuButton = styled(IconButton)`
  position: absolute;
  margin-start: 8px;
`;

export const LayersButton = styled(FAB)`
  position: absolute;
  background-color: white;
  margin: 10px;
  right: 10px;
  margin-top: 10px;
`;

export const LocationButton = styled(FAB)`
  position: absolute;
  background-color: white;
  margin: 10px;
  right: 10px;
  margin-top: 60px;
`;