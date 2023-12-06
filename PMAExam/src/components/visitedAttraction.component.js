import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import GoToButton from "./button.component";

const visitedAttraction = ({ name, image1, image2, seeDetails}) => {

  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.center}>
        <View style={styles.row}>
          <Image source={{ uri: image1 }} style={styles.smallImage} />
          <Image source={{ uri: image2 }} style={styles.smallImage} />
        </View>
        <View style={styles.margin} >
        <GoToButton text={"See details"} goTo={() => seeDetails()} buttonWidth={206} buttonHeight={41}/>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  name:{
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 11,

  },

  center:{
    alignItems: 'center',
  },

  row:{
    flexDirection: 'row',
    margin: 5,
  },
  
  smallImage: {
    width: 162,
    height: 217,
    margin: 5,
  },

  margin:{
    marginBottom: 30
  },
  
});

export default visitedAttraction;
