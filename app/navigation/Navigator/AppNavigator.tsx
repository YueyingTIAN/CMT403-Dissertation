import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useColorScheme } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

import RootNavigator from "./RootNavigator";

const AppStack = createStackNavigator();

const App = (): React.ReactElement => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme} >
      <AppStack.Navigator mode="modal">
        <AppStack.Screen
          name="AppStack"
          options={{ headerShown: false }}
          component={RootNavigator}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
