import React, { useState } from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { meal } from "carbon-footprint";

import { Text } from "components";
import { t } from "utils";
import { Colors } from "style";

import styles from "./Meal.styles";

const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 20;

interface Props {
  defaultValueSlider: number;
  foodModelType: string;
  setQuantity: (arg0: number) => void;
}

const Meal: React.FC<Props> = ({ foodModelType, setQuantity, defaultValueSlider }) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider);

  const onSliderValueChange = (value: number) => {
    const val = Math.round(value);
    setSliderValue(val);
    setQuantity(val);
  };

  return (
    <>
      <View style={styles.durationContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_QUANTITY")}</Text.H3>
        <Text.Primary lightGray>{sliderValue + " " + t("ADD_EMISSION_SCREEN_MEALS")}</Text.Primary>
      </View>
      <Slider
        minimumTrackTintColor={Colors.green50}
        maximumTrackTintColor={Colors.grey}
        thumbTintColor={Colors.green50}
        style={styles.slider}
        maximumValue={MAX_SLIDER_VALUE}
        minimumValue={MIN_SLIDER_VALUE}
        value={sliderValue}
        onSlidingComplete={onSliderValueChange}
      />
      <View style={styles.totalContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_TOTAL")}</Text.H3>
        <Text.H2 darkGray>
          <FormattedNumber
            value={sliderValue * meal[foodModelType]}
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>g</Text.Primary>
        </Text.H2>
      </View>
    </>
  );
};

export default Meal;
