import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";


const GoToButton = ({text, goTo}) => (
  <View style={styles.container}>
    <Pressable style={styles.button} onPress={() => goTo()}><Text style={styles.text}>{text}</Text></Pressable>
  </View>
);
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginLeft: 21,
        marginRight: 21,
        marginTop: 30,
    },

    button:{
        width: 250,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#688A6F",
        marginBottom: 25
      },

    text:{
        color: "white",
        fontSize: 16,
        fontWeight: '600',
    }
  });
  

export default GoToButton;