import {React, useState, useContext} from "react";
import { StyleSheet, View, Image, Pressable, Modal, ScrollView, FlatList } from "react-native";
import { Text } from "react-native-paper";
import Divider from '../components/divider.component';
import VisitedAtrranction from '../components/visitedAttraction.component';
import { BlurView } from 'expo-blur';
import AttractionDetail from "../components/attractionDetail.component";
import { CameraContext} from "../services/camera/camera.context";
import { SharedState } from "../infrastructure/navigation/SharedStateProvider";

export const ProfileScreen = () => {

  const { photoList } = useContext(CameraContext);
  const { attractionText, date } = SharedState();

  const [visible, setVisible] = useState(false);
  const [selectedPointOfInterest, setSelectedPointOfInterest] = useState(null);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/HCA_by_Thora_Hallager_1869.jpg/197px-HCA_by_Thora_Hallager_1869.jpg" }} // Replace with the actual URI
          style={styles.profilePicture}
        />
        <View style={styles.outlinedHeader}>
          <Text style={styles.descriptionText}>
          Hello! My name is Hans Christian, I like to note down every time i rub one out! Also I have a thing for sea-creatures.
          </Text> 
          <Text style={styles.ecoLevelText}>Eco-Level: Eco Overlord</Text>
        </View>
      </View>
  
      <Divider thickness={3}/>
  
      <Text style={styles.visitedAttractionsText}> Taked Attractions Photos </Text>
        {attractionText && date && (
          <>
            <Text>Attraction: {attractionText}</Text>
            <Text>Date you visited: {date.toDateString()}</Text>
          </>
        )}
        <FlatList
              numColumns={2}
              data={photoList}
              renderItem={({ item }) => (
                  <View style={styles.photoContainer}>
                      {item.uri && <Image source={{ uri: item.uri }} style={styles.photo} /> }
                  </View>
              )}
              keyExtractor={(item) => item.uri.toString()}
              contentContainerStyle={styles.photoListStyle}
        />

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebe2d9",
  },

  header: {
    flexDirection: "row",
    padding: 10,
  },

  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
  
  outlinedHeader: {
    flex: 1,
  },

  descriptionText: {
    marginBottom: 10,
  },

  ecoLevelText: {
    marginRight: 5,
  },
  
  visitedAttractionsText: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 30,
    fontSize: 17,
    color: "#000000", 
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    margin: 20,
    backgroundColor: '#F5F1ED',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  photoListStyle: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  photoContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  photo: {
      height: 250,
      width: 150,
      marginBottom: 50,
        
  },
});