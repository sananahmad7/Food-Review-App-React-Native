import { Text, View, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Header Filter */}

      <Header headerText={"Hi, Ahmad"} headerIcon={"bell-o"} />

      {/*Search Filter */}

      <SearchFilter
        icon="search"
        placeHolder={"Write the name of your favourite dish"}
      />

      {/* Categories Filter */}

      <View>
        <Text style={styles.C}>Categories</Text>

        {/* Categories List */}

        <CategoriesFilter />
      </View>

      {/* Recipe List Filter */}

      <View style={{ marginTop: 10, flex: 1 }}>
        <Text style={styles.C}>Recipes</Text>

        {/* Recipe List */}
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({
  C: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
});
