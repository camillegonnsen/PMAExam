import React, { useContext } from "react";
import { StyleSheet, View, FlatList, Image, Text} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CameraContext } from "../../services/camera/camera.context";
import { PhotoView, ReturnButton} from "./photo.style";


export const PhotoScreen = ({ navigation }) => {
    const { photoList } = useContext(CameraContext);

    if (!photoList || photoList.length === 0) {
        return (
          <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListText}>You haven't taken any photos yet :(</Text>
          </View>
        );
    }

    return (
        <>
            {/* <PhotoView source={{ uri: uri, isStatic: true }} /> */}

            <FlatList
                numColumns={2}
                data={photoList}
                renderItem={({ item }) => (
                    <View style={styles.photoContainer}>
                    {item.uri && <Image source={{ uri: item.uri }} style={styles.photo} /> }
                    </View>
                )}
                keyExtractor={(item) => item.uri.toString()}
                contentContainerStyle={styles.photoListStyle}
            /> 

            <ReturnButton onPress={() => navigation.navigate("Add")}>
                <Ionicons style={styles.icon} name="ios-arrow-back" size={24} color="black" />
            </ReturnButton>
        </>
    );
};

const styles = StyleSheet.create({
    icon:{
        marginLeft:10,
    },
    photoListStyle: {
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    photoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    photo: {
        height: 250,
        width: 150,
        marginBottom: 50,
          
    },
    emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyListText: {
        fontSize: 15,
        color: 'gray',
    },
});