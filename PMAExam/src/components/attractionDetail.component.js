import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const AttractionDetail = ({ name, score, address, image1, image2, goBack }) => {
  let scoreStyle;
  if (score > 70) {
    scoreStyle = styles.scoreGreen;
  } else if (score > 25) {
    scoreStyle = styles.scoreYellow;
  } else {
    scoreStyle = styles.scoreRed;
  }

  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.smallText}>
        Eco score: <Text style={scoreStyle}>{score}%</Text>
      </Text>
      <Text style={styles.smallText}>
        Address: <Text style={styles.address}>{address}</Text>
      </Text>
      <View style={styles.center}>
        <View style={styles.row}>
          <Image source={{ uri: image1 }} style={styles.smallImage} />
          <Image source={{ uri: image2 }} style={styles.smallImage} />
        </View>
        <Pressable style={styles.button} onPress={goBack}>
          <Text style={styles.back}>Go back</Text>
        </Pressable>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  name:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 11,

  },

  smallText:{
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 20,
    marginLeft: 10
  },

  scoreGreen:{
    color: "#7EAE80",
    fontSize: 40,
  },
  
  scoreYellow:{
    color: "#ffc300",
    fontSize: 40,
  },

  scoreRed:{
    color: "#c1121f",
    fontSize: 40,
  },

  address:{
    fontWeight: '400'
    
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
    borderColor: "#688A6F"
  },

  back:{
    color:"#688A6F",
    fontSize: 20,
    fontWeight: '700'
  }
  
});

export default AttractionDetail;
