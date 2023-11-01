import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useState, useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  function handleNavigation(){
    navigation.navigate('LoginScreen')
  }

  return (
    <View style={styles.container}>
      <View>
      <TextInput
        style={styles.input}
        label="E-mail"
        value={email}
        placeholder="type your email here"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(user) => setEmail(user)}
      />
       <TextInput
        style={styles.input}
        label="Password"
        value={password}
        placeholder="type your password here"
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(pass) => setPassword(pass)}
      />
      <TextInput
        style={styles.input}
        label="Repeat Password"
        value={repeatedPassword}
        placeholder="repeat your password here"
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(pass) => setRepeatedPassword(pass)}
      />
      <Pressable style={styles.nav_button} onPress={() => onRegister(email, password, repeatedPassword)}>
        <Text style={{ color: "white", fontWeight: "800" }}>Sign Up</Text>
      </Pressable>
      <Pressable style={styles.nav_button} onPress={() => navigation.goBack()}>
        <Text style={{ color: "white", fontWeight: "800" }}>Back</Text>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  nav_button: {
    backgroundColor: "#D291FF",
    width: 250,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    color: "white",
    marginTop: 20
  },
  input: {
    borderColor: "#D291FF",
    borderWidth: 2,
    width: 250,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    color: "black",
    textAlign: "center",
    marginTop: 20
  }
});