import {React} from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-paper";

export const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Text>Screen2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebe2d9",
    alignItems: "center",
  },

});
