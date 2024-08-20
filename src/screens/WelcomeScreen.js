import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/welcome1.png")}
        style={styles.i1}
      />
      <Text style={styles.t}>40K Premium Recipes</Text>
      <Text style={styles.t2}>Cook like a chef</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("RecipeList")}
        style={styles.to}
      >
        <Text style={styles.t3}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  i1: {
    marginTop: 30,
  },
  t: {
    color: "#f96163",
    fontSize: 20,
  },
  t2: {
    color: "#1c1b1b",
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 20,
  },
  to: {
    backgroundColor: "#f96163",
    borderRadius: 12,
    padding: 18,
    width: "80%",
  },
  t3: {
    color: "#f5f0f0",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
