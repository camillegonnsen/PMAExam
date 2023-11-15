import React, { useEffect, useState } from "react";
import {
  PaperProvider,
} from "react-native-paper";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";

import { Marker } from "react-native-maps";

import * as Location from "expo-location";

import {
  Maps,
  LayersButton,
  LocationButton,
} from "./maps.style";

// Defining our own "type" called `pointOfInterest`.
class pointOfInterest {
  constructor(coordinates, info, image) {
    this.coordinates = coordinates; // Latitude and longitude.
    this.info = info; // Short string to describe the location.
    this.image = image; //Image source for the marker.
  }
}

export const Map = () => {
  const [mapType, setMapType] = useState("standard");
  const [showsUserLocation, setShowsUserLocation] = useState(false);
  const [visible, setVisible] = React.useState(false);


  const pointsOfInterest = [
    //Green markers
    new pointOfInterest(
      { latitude: 55.69269516489231, longitude: 12.594401456560474},
      "Kastellet",
      require("../../assets/greenMarker.png")
    ),
    new pointOfInterest(
      { latitude: 55.65346745093697, longitude: 12.577147786658136 },
      "Amager Fælled",
      require("../../assets/greenMarker.png")
    ),
    new pointOfInterest(
      { latitude: 55.68932350079579, longitude: 12.567072701450753 },
      "Søerne",
      require("../../assets/greenMarker.png")
    ),
    new pointOfInterest(
      { latitude: 55.67479738955379, longitude: 12.581137072338239 },
      "Bibliotekshaven",
      require("../../assets/greenMarker.png")
    ),
    new pointOfInterest(
      { latitude: 55.665404205576166, longitude: 12.573790195349881 },
      "Havnestads Havnepark",
      require("../../assets/greenMarker.png")
    ),
    new pointOfInterest(
      { latitude: 55.702300779373026, longitude: 12.567884842266832 },
      "Fælledparken",
      require("../../assets/greenMarker.png")
    ),
    new pointOfInterest(
      { latitude: 55.69295792626929, longitude: 12.59920029526256 },
      "The Little Mermaid",
      require("../../assets/greenMarker.png")
    ),
    new pointOfInterest(
      { latitude: 55.685138307213016, longitude: 12.589543670252091 },
      "Church of Our Lady",
      require("../../assets/greenMarker.png")
    ),
    new pointOfInterest(
      { latitude: 55.67937896150321, longitude: 12.572147968274647 },
      "The Marble Church",
      require("../../assets/greenMarker.png")
    ),

    //Yellow markers
    new pointOfInterest(
      { latitude: 55.67253027778619, longitude: 12.521315181767763 },
      "Copenhagen Zoo",
      require("../../assets/yellowMarker.png")
    ),

    new pointOfInterest(
      { latitude: 55.67457812197257, longitude: 12.574676383616369},
      "National Museum of Denmark",
      require("../../assets/yellowMarker.png")
    ),

    //Red markers
    new pointOfInterest(
      { latitude: 55.6738352545145, longitude: 12.568286556922459 },
      "Tivoli",
      require("../../assets/redMarker.png")
    ),

    new pointOfInterest(
      { latitude: 55.638610148608976, longitude: 12.655649397107624 },
      "National Aquarium Denmark",
      require("../../assets/redMarker.png")
    ),
  ];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
    })();
  }, []);

  return (
    <PaperProvider>
      <Maps
        initialRegion={{
          // ITU's coordinates.
          latitude: 55.6596,
          longitude: 12.591,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType={mapType}
        showsUserLocation={showsUserLocation}
      >
        {pointsOfInterest.map((p, index) => (
          <Marker
            key={index}
            coordinate={p.coordinates}
            title={p.info}
          
          >
            <Image source={p.image} style={{ width: 40, height: 40 }} />
          </Marker>
        ))}
      </Maps>
      <LayersButton
        icon="layers"
        size="small"
        onPress={() => {
          setMapType(mapType === "hybrid" ? "standard" : "hybrid");
        }}
      />
      <LocationButton
        icon="crosshairs-gps"
        size="small"
        onPress={() => {
          setShowsUserLocation(!showsUserLocation);
        }}
      />
    </PaperProvider>
  );
};