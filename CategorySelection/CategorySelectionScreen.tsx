import React from "react";
import { ScrollView, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { navigate } from "navigation";
import { FoodsType, NavStatelessComponent } from "interfaces";
import { Text, Tag, StickersImage } from "components";
import { t, ui } from "utils";

import { categories } from "./categoryList";
import navigationOptions from "./CategorySelectionScreen.navigationOptions";
import styles from "./CategorySelectionScreen.styles";

import { ImagesAssets } from "constant";

const CategorySelectionScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const onPress = ({ foodType }) => {

    navigator.openSubCategorySelection({ foodType });

  };

  return (
    <ScrollView style={styles.container}>
      <Text.H2 style={styles.info}>{t("CATEGORY_SELECTION_SCREEN_SELECT_CATEGORY")}</Text.H2>
      {categories.map((category, index) => (
        <Tag
          key={index}
          imageicon={category.imageicon}
          text={ui.getTranslationFoodsType(category.foodType)}
          onPress={() => onPress(category)}
        />
      ))}
      <View style={styles.separator}>
      </View>
    </ScrollView>
  );
};

CategorySelectionScreen.navigationOptions = navigationOptions();

export default CategorySelectionScreen;
