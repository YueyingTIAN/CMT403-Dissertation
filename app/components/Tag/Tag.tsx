import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "style";

import Text from "../Text";
import styles from "./Tag.styles";
import ImageIcon from "../ImageIcon";

interface Props {
  icon?: string;
  imageicon?: string;
  text: string;
  onPress: () => void;
}

const Tag: React.FC<Props> = ({ text, onPress, icon, imageicon }) => {
  let iconItem = null;
  let imageiconItem = null;

  if (icon) {
    iconItem = <Ionicons name={icon} size={32} style={styles.mainIcon} color={Colors.green50} />;
  }

  if (imageicon) {
    imageiconItem = <ImageIcon sticker={imageicon} />
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {iconItem}
      {imageiconItem}
      <View style={styles.textContainer}>
        <Text.Primary style={styles.text}>{text}</Text.Primary>
      </View>
      <Ionicons name={"chevron-forward"} size={20} color={Colors.green50} />
    </TouchableOpacity>
  );
};

export default Tag;
