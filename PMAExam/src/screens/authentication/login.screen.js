import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);


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

      <Pressable style={styles.nav_button} onPress={() => onLogin(email, password)}>
        <Text style={{ color: "white", fontWeight: "800" }}>Login</Text>
      </Pressable>

      <View style={styles.signUpContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.text}>
              Don't have an account?{" "}
              <Text style={styles.sign}>Sign Up</Text>
            </Text>

      </TouchableOpacity>
      </View>
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
  },

  signUpContainer:{
    alignItems: "center",
    marginTop: 10
  },

  sign:{
    color: "blue",
    textDecorationLine: "underline"
  }
});