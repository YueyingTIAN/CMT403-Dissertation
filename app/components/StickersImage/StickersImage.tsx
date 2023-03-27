import React from "react";
import { View, Image } from "react-native";

import { ImagesAssets } from "constant";

import styles from "./StickersImage.styles";

interface Prop {
  sticker: string;
}

const StickersImage: React.FC<Prop> = ({ sticker }) => {
  let source = ImagesAssets.stickers.earth;

  if (sticker === "earth") {
    source = ImagesAssets.stickers.earth;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={source} />
    </View>
  );
};

export default StickersImage;
