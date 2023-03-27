import React, { ReactElement } from "react";
import { Ionicons } from "@expo/vector-icons";

import { View, Image } from "react-native";

import { ImagesAssets } from "constant";

import { Colors } from "style";

import styles from "./TabBarIcon.styles";

import { GuideCategory } from "../../types/guide";

interface Props {
  name?: string;
  focused: boolean;
  imageicon?: string;
}


export default function TabBarIcon(props: Props): ReactElement {

  let source = ImagesAssets.stickers.budget;

  if (props.imageicon === "favorite") {
    source = ImagesAssets.stickers.favorite;
  } else if (props.imageicon === "add") {
    source = ImagesAssets.stickers.add;
  } else if (props.imageicon === "recipes") {
    source = ImagesAssets.stickers.recipes;
  } else if (props.imageicon === "setting") {
    source = ImagesAssets.stickers.setting;
  } else if (props.imageicon === GuideCategory.breakfast) {
    source = ImagesAssets.stickers.breakfast;
  } else if (props.imageicon === GuideCategory.morningtea) {
    source = ImagesAssets.stickers.morningtea;
  } else if (props.imageicon === GuideCategory.lunch) {
    source = ImagesAssets.stickers.lunch;
  } else if (props.imageicon === GuideCategory.afternoontea) {
    source = ImagesAssets.stickers.afternoontea;
  } else if (props.imageicon === GuideCategory.supper) {
    source = ImagesAssets.stickers.supper;
  } else if (props.imageicon === GuideCategory.eveningsnack) {
    source = ImagesAssets.stickers.eveningsnack;
  }

  return (
    <Image style={styles.image} resizeMode="contain" source={source} />
  );
}
