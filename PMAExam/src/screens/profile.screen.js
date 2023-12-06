import {React} from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
import Divider from '../components/divider.component';
import PhotoList from "../components/photolist.component";

export const ProfileScreen = () => {

  return (
    <View style={styles.container}>
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
    fontSize: 20,
    color: "#000000", 
  },
});