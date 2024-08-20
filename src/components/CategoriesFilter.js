import { Text, View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { categories, colors } from "../Constant";
const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View
            style={{
              backgroundColor:
                index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
              marginTop: 16,
              marginRight: 32,
              marginLeft: 10,
              borderRadius: 8,
              padding: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 7,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: index === 0 && colors.COLOR_LIGHT,
                fontSize: 18,
              }}
            >
              {category.category}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  /*container: {
    backgroundColor: colors.COLOR_PRIMARY,
    marginTop: 16,
    marginRight: 32,
    marginLeft: 10,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 7,
  },*/
});

export default CategoriesFilter;
