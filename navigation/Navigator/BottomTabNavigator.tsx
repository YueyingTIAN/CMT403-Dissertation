import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TabBarIcon } from "components";
import { t } from "utils";
import { Colors } from "style";

import RecipeNavigator from "./BottomTab/RecipeNavigator";
import BudgetNavigator from "./BottomTab/BudgetNavigator";
import FavoriteNavigator from "./BottomTab/FavoriteNavigator";
import SettingsNavigator from "./BottomTab/SettingsNavigator";
import AddNavigator from "./BottomTab/AddNavigator";

import { useColorScheme } from 'react-native';

const BottomTab = createBottomTabNavigator();

const BudgetOptions = {
  tabBarLabel: t("BUDGET_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} imageicon="budget" />,
};

const FavoriteOptions = {
  tabBarLabel: t("FAVORITE_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} imageicon="favorite" />,
};

const RecipeOptions = {
  tabBarLabel: t("RECIPE_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} imageicon="recipes" />,
};

const SettingsOptions = {
  tabBarLabel: t("SETTINGS_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} imageicon="setting" />,
};

const AddOptions = {
  tabBarLabel: t("ADD_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} imageicon="add" />,
};

const BottomTabNavigator = (): React.ReactElement => {
  const { bottom } = useSafeAreaInsets();

  const scheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName={"RecipeNavigator"}
      tabBarOptions={{
        activeTintColor: Colors.green50,
        inactiveTintColor: Colors.grey40,
        style: {
          backgroundColor: scheme === "light" ? Colors.white : Colors.black,  // Colors.white,
          borderTopWidth: 2,
          borderTopColor: Colors.green10,
          paddingBottom: bottom / 2 + 6,
        },
      }}
    >
      <BottomTab.Screen 
        name="RecipeNavigator" 
        options={RecipeOptions} 
        component={RecipeNavigator} 
      />
      <BottomTab.Screen
        name="AddNavigator"
        options={AddOptions}
        component={AddNavigator}
      />
      <BottomTab.Screen
        name="FavoriteNavigator"
        options={FavoriteOptions}
        component={FavoriteNavigator}
      />
      <BottomTab.Screen
        name="BudgetNavigator"
        options={BudgetOptions}
        component={BudgetNavigator}
      />
      <BottomTab.Screen
        name="SettingsNavigator"
        options={SettingsOptions}
        component={SettingsNavigator}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
