import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FavoriteItemScreen from "../../../screens/FavoriteItem";
import FavoritesScreen from "../../../screens/Favorites";
import MonthlyFoodsScreen from "../../../screens/MonthlyFoods";
import RecurringFoodsScreen from "../../../screens/RecurringFoods";

const Stack = createStackNavigator();

const FavoriteNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="FavoritesScreen"
      options={FavoritesScreen.navigationOptions}
      component={FavoritesScreen}
    />
    <Stack.Screen
      name="FavoriteItem"
      options={FavoriteItemScreen.navigationOptions}
      component={FavoriteItemScreen}
    />
    <Stack.Screen
      name="MonthlyFoods"
      options={MonthlyFoodsScreen.navigationOptions}
      component={MonthlyFoodsScreen}
    />
    <Stack.Screen
      name="RecurringFoods"
      options={RecurringFoodsScreen.navigationOptions}
      component={RecurringFoodsScreen}
    />
  </Stack.Navigator>
);

export default FavoriteNavigator;
