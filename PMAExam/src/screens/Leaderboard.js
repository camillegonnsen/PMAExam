import {React, useState} from "react";
import { StyleSheet, View, Image, Pressable, Alert, FlatList, Text } from "react-native";
import LeaderboardAtrraction from "../components/leaderboard.component";


export const Leaderboard = () => {
  const [attractionList, setattractionList] = useState([
    { id: '1', name: 'Kastellet', score: 99 },
    { id: '2', name: 'Søerne', score: 99 },
    { id: '3', name: 'Bibliotekshaven', score: 98 },
    { id: '4', name: 'Amager fællede', score: 98 },
    { id: '5', name: 'Islands brygge', score: 95 },
    { id: '6', name: 'Fælledparken', score: 94 },
    { id: '7', name: 'The little mermaid', score: 93 },
    { id: '8', name: 'The church of our lady', score: 93 },
    { id: '9', name: 'Marmorkirken', score: 93 },
  ]);

  const seeDetails = (id) => {
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The most green activities you can do in the city</Text>
      <FlatList
            data={attractionList}
            renderItem = {({item}) => (
                <LeaderboardAtrraction id= {item.id} name={item.name} score={item.score} seeDetails={seeDetails}/> 
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.flatListContent}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebe2d9", // Updated background color
  },

  header: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 20,
    fontWeight: '500'
  }
 
});
