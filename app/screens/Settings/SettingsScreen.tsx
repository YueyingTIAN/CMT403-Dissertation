import React, { useState } from "react";
import { View, TouchableWithoutFeedback, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ExpoConstants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";

import { ImagesAssets } from "constant";
import { Button, Text, ListItem } from "components";
import { t, platform } from "utils";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";

import styles from "./SettingsScreen.styles";
import navigationOptions from "./SettingsScreen.navigationOptions";

const SettingsScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const rowItems = [
    {
      title: t("SETTINGS_SCREEN_ABOUT"),
      onPress: navigator.openAbout,
    },
    {
      title: t("SETTINGS_SCREEN_HEALTHY_DIET"),
      onPress: () => WebBrowser.openBrowserAsync("https://en.wikipedia.org/wiki/Healthy_diet"),
    },
  ];

  if (__DEV__) {
    rowItems.push({
      title: t("SETTINGS_SCREEN_LANGUAGES"),
      onPress: navigator.openLanguages,
    });
  }

  const [steps, setSteps] = useState(0);

  return (
    <ScrollView style={styles.container}>
      {rowItems.map((item, index) => (
        <ListItem
          key={index}
          showBottomLine={index !== rowItems.length - 1}
          onPress={item.onPress}
          title={item.title}
        />
      ))}
      <TouchableWithoutFeedback onPress={() => setSteps(steps + 1)}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} resizeMode="contain" source={ImagesAssets.logos.logo} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

SettingsScreen.navigationOptions = navigationOptions();

export default SettingsScreen;
