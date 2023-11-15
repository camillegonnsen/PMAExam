import {React} from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
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
      <View style={styles.separator}></View>
      {/* Bottom element with "visited attractions" text, images, and button */}
      <View style={styles.bottomElement}>
        <Text style={styles.visitedAttractionsText}>Visited Attractions</Text>
        <Text style={styles.smallText}>The Little Mermaid</Text>
        {/* Two pictures side by side */}
        <View style={styles.pictureContainer}>
          {/* Replace the source with actual URIs */}
          <Image source={{ uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR54cCcSoV80Kuw-k4Z1brP212Kq16LWuwGPbL9oLWnvO2G_Hcj" }} style={styles.smallImage} />
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1sFaSam39xpsT4CaiEQwLCIw0MSjFH5xPWSYPCzE36ypE_tJB" }} style={styles.smallImage} />
        </View>
        {/* Button with modified color */}
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>See Details</Text>
          {/* Placeholder for navigation bar */}
          {/* Replace with your actual navigation bar component */}
          <View style={styles.navigationBarPlaceholder}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1ED", // Updated background color
  },
  header: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
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
    backgroundColor: "black",
  },
  bottomElement: {
    padding: 10,
  },
  visitedAttractionsText: {
    fontWeight: "bold",
    marginBottom: 10,
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
    width: 50,
    height: 50,
    marginRight: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#688A6F", // Updated color
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    marginRight: 10,
    color: "#688A6F", // Updated color
  },
  navigationBarPlaceholder: {
    width: 100, // Placeholder width
    height: 20, // Placeholder height
    backgroundColor: "lightgray", // Placeholder background color
  },
});
