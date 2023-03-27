import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddFavoriteScreen from "../../../screens/AddFavorite";
import CategorySelectionScreen from "../../../screens/CategorySelection";
import SubCategorySelectionScreen from "../../../screens/SubCategorySelection";

const Stack = createStackNavigator();

const AddNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="CategorySelection"
      options={CategorySelectionScreen.navigationOptions}
      component={CategorySelectionScreen}
    />
    <Stack.Screen
      name="SubCategorySelection"
      options={SubCategorySelectionScreen.navigationOptions}
      component={SubCategorySelectionScreen}
    />
    <Stack.Screen
      name="AddFavorite"
      options={AddFavoriteScreen.navigationOptions}
      component={AddFavoriteScreen}
    />
  </Stack.Navigator>
);

export default AddNavigator;
