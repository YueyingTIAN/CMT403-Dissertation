import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../../../screens/Settings";
import AboutScreen from "../../../screens/About";
import LanguagesScreen from "../../../screens/Languages/LanguagesScreen";

const Stack = createStackNavigator();

const SettingsNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="Settings"
      options={SettingsScreen.navigationOptions}
      component={SettingsScreen}
    />
    <Stack.Screen 
      name="About" 
      options={AboutScreen.navigationOptions} 
      component={AboutScreen} 
    />
    <Stack.Screen
      name="Languages"
      options={LanguagesScreen.navigationOptions}
      component={LanguagesScreen}
    />
  </Stack.Navigator>
);

export default SettingsNavigator;
