//Customly made header component with passing props
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
const Header = ({ headerText, headerIcon }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: 10,
        marginHorizontal: 10,
      }}
    >
      <Text style={{ flex: 1, fontSize: 22, fontWeight: "600" }}>
        {headerText}
      </Text>
      <FontAwesome name={headerIcon} size={24} color={"#f96163"} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
