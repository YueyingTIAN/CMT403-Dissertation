import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RecipeTabNavigator from "./RecipeTabNavigator";
import RecipeDetailScreen from "../../../screens/RecipeDetail";

const Stack = createStackNavigator();

const RecipeNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="RecipeTabNavigator"
      options={RecipeTabNavigator.navigationOptions}
      component={RecipeTabNavigator}
    />
    <Stack.Screen
      name="RecipeDetail"
      component={RecipeDetailScreen}
      options={RecipeDetailScreen.navigationOptions}
    />
  </Stack.Navigator>
);

export default RecipeNavigator;
