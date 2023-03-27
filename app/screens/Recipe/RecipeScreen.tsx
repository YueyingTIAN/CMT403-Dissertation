import React from "react";
import { FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { filter, pathEq } from "ramda";

import { ListItem, Text } from "components";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";

import { Guide } from "../../types/guide";
import Guides from "../../../assets/guides/guides.json";
import navigationOptions from "./RecipeScreen.navigationOptions";
import styles from "./RecipeScreen.styles";

const getCategory = pathEq(["category"]);

const RecipeScreen: NavStatelessComponent = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = filter(getCategory(route.name), Guides) as Guide[];
  const navigator = navigate(navigation);

  const renderItem = ({ item, index }) => (
    <ListItem
      key={index}
      showBottomLine={index != data.length - 1}
      title={item.title}
      onPress={() => navigator.openRecipeDetails(item)}
    />
  );

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};

RecipeScreen.navigationOptions = navigationOptions();

export default RecipeScreen;
