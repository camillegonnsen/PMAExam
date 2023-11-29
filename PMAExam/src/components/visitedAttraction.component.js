import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const visitedAttraction = ({ name, image1, image2, seeDetails}) => {

  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.center}>
        <View style={styles.row}>
          <Image source={{ uri: image1 }} style={styles.smallImage} />
          <Image source={{ uri: image2 }} style={styles.smallImage} />
        </View>
        <Pressable style={styles.button} onPress={() => seeDetails()}>
            <Text style={styles.details}>See details</Text>
        </Pressable>
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
  button:{
    width: 206,
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#688A6F",
    marginBottom: 25
  },

  details:{
    color:"#688A6F",
    fontSize: 20,
    fontWeight: '700'
  }
  
});

export default visitedAttraction;
