import {React, useState} from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import Divider from '../components/divider.component';
import PhotoList from "../components/photolist.component";

export const ProfileScreen = () => {

  const [attractionList, setattractionList] = useState([
    {id: "1", name: 'The Little Mermaid', score: 93, address: "Langelinie, 2100 København Ø", image1: "https://usercontent.one/wp/www.rundtidanmark.dk/wp-content/uploads/2021/06/KMO_9949.jpg", image2: "https://a.cdn-hotels.com/gdcs/production103/d1630/806328d2-1333-4996-a51b-39d34be73bee.jpg"},
    {id: "2", name: 'Amager Fællede', score: 98, address: "Artillerivej 73B, 2300 København", image1: "https://naturibyen.com/wp-content/uploads/2017/06/Koebenhavn_S_20120808_TH_0049_web.jpg", image2:"https://media-cdn.tripadvisor.com/media/photo-s/05/bf/34/72/amager-faelled.jpg"},
  ]);

  const [visible, setVisible] = useState(false);
  const [selectedPointOfInterest, setSelectedPointOfInterest] = useState(null);

  const seeDetails = (item) => {
    setSelectedPointOfInterest(item);
    setVisible(true);
  };

  const closeModal = () => {
    setSelectedPointOfInterest(null);
    setVisible(false);
  };

  return (
    
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/HCA_by_Thora_Hallager_1869.jpg/197px-HCA_by_Thora_Hallager_1869.jpg" }} // Replace with the actual URI
          style={styles.profilePicture}
        />
        <View style={styles.outlinedHeader}>
          <Text style={styles.descriptionText}>
          Hello! My name is Hans Christian. I have a thing for sea-creatures and love to explore the beautiful city of Copenhagen
          </Text> 
          <Text style={styles.ecoLevelText}>Eco-Level: Eco Overlord</Text>
        </View>
      </View>
      <Divider thickness={3}/>
      <Text style={styles.visitedAttractionsText}>Photos from your visited attractions!</Text>
      <PhotoList />
    </ScrollView>
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
    fontSize: 20,
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
});