import React from "react";
import { View, Text, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const SearchFilter = ({ icon, placeHolder }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingVertical: 12,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 5,
        marginLeft: 15,
        marginRight: 15,
        shadowColor: "000",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 7,
      }}
    >
      <FontAwesome name={icon} size={20} color="#f96163" />
      <TextInput
        style={{ paddingLeft: 10, fontSize: 16, color: "#808080" }}
        placeholder={placeHolder}
      />
    </View>
  );
};

export default SearchFilter;
