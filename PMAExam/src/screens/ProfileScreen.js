import {React} from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import { Text } from "react-native-paper";
import Divider from '../../src/components/divider.component';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Rounded profile picture in the top right corner */}
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/HCA_by_Thora_Hallager_1869.jpg/197px-HCA_by_Thora_Hallager_1869.jpg" }} // Replace with the actual URI
          style={styles.profilePicture}
        />
        {/* Larger bold text next to the profile picture */}
        <Text style={styles.profileText}>Profile</Text>
        {/* Outlined header with thin black line */}
        <View style={styles.outlinedHeader}>
          {/* Profile description text box */}
          <Text style={styles.descriptionText}>
          Hello My name is Hans Christian, I like to note down every time i rub one out!
          Also I have a thing for sea-creatures.
          </Text>
          {/* Eco-Level text box with image */}
          <View style={styles.ecoLevelContainer}>
            <Text style={styles.ecoLevelText}>Eco-Level: Eco Overlord</Text>
            <Image
              source={{ uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTme2WQq0kAB3CTMvzmjdSlyNcJkCkIRktnut8P0MgdrOPN4tXsyour_image_uri" }} // Replace with the actual URI
              style={styles.ecoLevelImage}
            />
          </View>
        </View>
      </View>
      {/* Thin black line separating text box from the bottom element */}
      <Divider thickness={3}/>
      {/* Bottom element with "visited attractions" text, images, and button */}
      <Text style={styles.visitedAttractionsText}>Visited Attractions</Text>
      <View style={styles.bottomElement}>
        
        <Text style={styles.smallText}>The Little Mermaid</Text>
        {/* Two pictures side by side */}
        <View style={styles.pictureContainer}>
          {/* Replace the source with actual URIs */}
          <Image source={{ uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR54cCcSoV80Kuw-k4Z1brP212Kq16LWuwGPbL9oLWnvO2G_Hcj" }} style={styles.smallImage} />
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1sFaSam39xpsT4CaiEQwLCIw0MSjFH5xPWSYPCzE36ypE_tJB" }} style={styles.smallImage} />
        </View>
        {/* Button with modified color */}
        <Pressable style={styles.detailButton}>
          <Text style={styles.buttonText}>See Details</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebe2d9", // Updated background color
  },
  header: {
    flexDirection: "row",
    padding: 10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#688A6F", // Updated color
    marginRight: 10,
  },
  outlinedHeader: {
    flex: 1,
  },
  descriptionText: {
    marginBottom: 10,
    color: "#000000", // Updated color
  },
  ecoLevelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ecoLevelText: {
    marginRight: 5,
    color: "#000000", // Updated color
  },
  ecoLevelImage: {
    width: 20,
    height: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#ebe2d9",
  },
  bottomElement: {
    flex: 1, 
    alignItems: "center", 
    padding: 10,
  },

  visitedAttractionsText: {
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 30,
    marginLeft: 25,
    fontSize: 17,
    color: "#000000", // Updated color
  },
  smallText: {
    marginBottom: 10,
    color: "#000000", // Updated color
  },
  pictureContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  smallImage: {
    width: 162,
    height: 217,
    marginRight: 5,
  },
  detailButton: {
    width: 326,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#688A6F"

  },
  buttonText: {
    textAlign: "center",
    marginRight: 10,
    fontSize: 17,
    fontWeight: 700,
    color: "#688A6F", // Updated color
  },
  navigationBarPlaceholder: {
    width: 100, // Placeholder width
    height: 20, // Placeholder height
    backgroundColor: "lightgray", // Placeholder background color
  },
});

//hej