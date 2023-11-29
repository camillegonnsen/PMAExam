import {React} from "react";
import {
  StyleSheet,
  View,
  Image
} from "react-native";
import { Text } from "react-native-paper";
import GoToButton from "../components/button.component";

export const Overview = ({navigation}) => {

  const goTo = () => {
    navigation.navigate('Map')
  };

  return (
    <View style={styles.container}>
      <Image
          source={require('../../assets/GreenGetAwayLogo.png')}
          style={{width: 100, height: 100, margin: 30}}
        />
      <Text style={styles.header}>Green Getaway</Text>
      <Text style={styles.text}>Discover eco-friendly destinations and travel responsibly with our Sustainable Travel and Tourism Guide app. 
        Explore a curated selection of environmentally-conscious travel options and eco-friendly activities.
        Make informed choices that minimize your carbon footprint while having memorable, sustainable adventures around the world.
      </Text>
      <GoToButton text={"Find attractions"} goTo={() => goTo()}/>
    </View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebe2d9",
    alignItems: "center",
    justifyContent: 'center',
  },

  header:{
    fontSize: 30,
  },

  text:{
     margin: 30,
     fontSize: 15,
     textAlign: 'center'
  },

});