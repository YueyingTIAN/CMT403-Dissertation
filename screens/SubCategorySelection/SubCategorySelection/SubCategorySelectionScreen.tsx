import React from "react";
import { ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { FoodsType, EmissionModelType, NavStatelessComponent } from "interfaces";
import { Text, Tag } from "components";
import { t, ui } from "utils";
import { navigate } from "navigation";

import {
  foodTypes,
  fashionTypes,
  transportTypes,
  purchaseTypes,
  mealTypes,
  streamingTypes,
} from "./subCategoryTypes";
import navigationOptions from "./SubCategorySelectionScreen.navigationOptions";
import styles from "./SubCategorySelectionScreen.styles";

const getSubCategory = (foodType): Array<EmissionModelType> => {
  switch (foodType) {
    case FoodsType.fashion:
      return fashionTypes;
    case FoodsType.food:
      return foodTypes;
    case FoodsType.transport:
      return transportTypes;
    case FoodsType.purchase:
      return purchaseTypes;
    case FoodsType.meal:
      return mealTypes;
    case FoodsType.streaming:
      return streamingTypes;
    default:
      return fashionTypes;
      break;
  }
};

const SubCategorySelectionScreen: NavStatelessComponent = () => {
  const route = useRoute();

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const foodType = route.params?.foodType;

  const subCategories = getSubCategory(foodType);

  return (
    <ScrollView style={styles.container}>
      <Text.H2 style={styles.info}>
        {t("SUB_CATEGORY_SELECTION_SCREEN_SELECT_SUB_CATEGORY")}
      </Text.H2>
      {subCategories.map((subCategory) => (
        <Tag
          key={subCategory}
          text={ui.getTranslationFoodModelType(subCategory)}
          onPress={() =>
            navigator.openAddFavorite({ foodType, foodModelType: subCategory })
          }
        />
      ))}
    </ScrollView>
  );
};

SubCategorySelectionScreen.navigationOptions = navigationOptions();

export default SubCategorySelectionScreen;
