import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FormattedNumber } from "react-native-globalize";

import { Colors } from "style";
import { RecurringEmission, Emission, FoodsType } from "interfaces";

import Text from "../Text";
import styles from "./FoodListItem.styles";

interface AnyEmission extends RecurringEmission, Emission {}

interface FoodListItemProps extends Partial<AnyEmission> {
  title: string;
  co2value: number;
  iconName: string;
  onPress: () => void;
  /* no used in FoodListItem so optional */
  foodType?: FoodsType;
  value?: number;
  creationDate?: string;
  times?: number;
}

const FoodListItem: React.FC<FoodListItemProps> = ({
  isMitigated,
  name = "",
  iconName = "fast-food",
  title = "",
  co2value = 0,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.iconContainer}>
      <View style={isMitigated ? styles.mitigatedCircle : styles.notMitigatedCircle} />
      <Ionicons
        name={"fast-food"}
        size={22}
        style={styles.icon}
        color={isMitigated ? Colors.green50 : Colors.grey70}
      />
    </View>
    <View style={styles.textContainer}>
      <Text.Primary numberOfLines={1}>{name.length ? name : title}</Text.Primary>
      <View style={styles.detailsContainer}>
        <Text.Tertiary numberOfLines={1} lightGray>
          <FormattedNumber maximumFractionDigits={co2value >= 1 ? 2 : 4} value={co2value* 10}  /> calories
        </Text.Tertiary>
        {isMitigated && (
          <>
            <Text.Tertiary lightGray>{" • "}</Text.Tertiary>
            <Text.Tertiary green>{"Offset"}</Text.Tertiary>
          </>
        )}
      </View>
    </View>
    <Ionicons
      name={"ios-chevron-forward-outline"}
      size={18}
      style={styles.icon}
      color={Colors.grey70}
    />
  </TouchableOpacity>
);

export { FoodListItem, FoodListItemProps };
