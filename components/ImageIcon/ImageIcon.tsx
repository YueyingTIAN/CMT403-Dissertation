import React from "react";
import { View, Image } from "react-native";

import { ImagesAssets } from "constant";

import styles from "./ImageIcon.styles";

interface Prop {
  sticker: string;
}

const ImageIcon: React.FC<Prop> = ({ sticker }) => {
  let source = ImagesAssets.stickers.earth;

  if (sticker === "grain") {
    source = ImagesAssets.stickers.grain;
  } else if (sticker === "vitamin-a") {
    source = ImagesAssets.stickers.vitamina;
  } else if (sticker === "dessert") {
    source = ImagesAssets.stickers.dessert;
  } else if (sticker === "freshfood") {
    source = ImagesAssets.stickers.freshfood;
  } else if (sticker === "dairy") {
    source = ImagesAssets.stickers.dairy;
  } else if (sticker === "eggs") {
    source = ImagesAssets.stickers.eggs;
  } else if (sticker === "otherfruit") {
    source = ImagesAssets.stickers.otherfruit;
  } else if (sticker === "legumes") {
    source = ImagesAssets.stickers.legumes;
  } else if (sticker === "nuts") {
    source = ImagesAssets.stickers.nuts;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={source} />
    </View>
  );
};

export default ImageIcon;
