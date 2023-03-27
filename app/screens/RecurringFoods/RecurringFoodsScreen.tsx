import React from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { map, pipe, propOr, sum } from "ramda";

import { navigate } from "navigation";
import { FoodListItem, FoodListItemProps, Text } from "components";
import { NavStatelessComponent } from "interfaces";

import styles from "./RecurringFoodsScreen.styles";
import { selectors } from "./ducks";
import navigationOptions from "./RecurringFoodsScreen.navigationOptions";

const getCO2value = map(propOr(0, "co2value"));
const getAmountCO2 = pipe(getCO2value, sum);

const RecurringFoodsScreen: NavStatelessComponent = () => {
  const recurringEmissions: Array<FoodListItemProps> = useSelector(
    selectors.getAllRecurringFoods
  );

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const co2value = getAmountCO2(recurringEmissions);

  const renderHeader = () => (
    <View style={styles.containerHeader}>
      <Text.Primary darkGray bold>
        {`${co2value.toFixed(2)} g`}
      </Text.Primary>
    </View>
  );

  return (
    <FlatList<FoodListItemProps>
      style={styles.container}
      data={recurringEmissions}
      ListHeaderComponent={renderHeader()}
      keyExtractor={({ id }) => id}
      renderItem={({ item: { id, name, title, co2value, iconName, foodModelType } }) => (
        <FoodListItem
          id={id}
          isMitigated={false}
          name={name}
          onPress={() => navigator.openFavoriteItem({ id, isRecurringEmission: true })}
          title={title}
          co2value={co2value}
          iconName={iconName}
          foodModelType={foodModelType}
        />
      )}
    />
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
RecurringFoodsScreen.navigationOptions = navigationOptions;

export default RecurringFoodsScreen;
