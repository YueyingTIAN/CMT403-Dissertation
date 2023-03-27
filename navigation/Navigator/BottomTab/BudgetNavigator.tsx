import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BudgetScreen from "../../../screens/Budget";
import MontlyBudgetScreen from "../../../screens/MonthlyBudget";
import AddFavoriteScreen from "../../../screens/AddFavorite";

const Stack = createStackNavigator();

const BudgetNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Budget" 
      options={BudgetScreen.navigationOptions} 
      component={BudgetScreen} 
    />
    <Stack.Screen
      name="MonthlyBudget"
      options={MontlyBudgetScreen.navigationOptions}
      component={MontlyBudgetScreen}
    />
    <Stack.Screen
      name="AddFavorite"
      options={AddFavoriteScreen.navigationOptions}
      component={AddFavoriteScreen}
    />
  </Stack.Navigator>
);

export default BudgetNavigator;
