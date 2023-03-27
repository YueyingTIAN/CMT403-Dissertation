import React, { useState } from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { FormattedNumber } from "react-native-globalize";
import { transport, TransportType } from "carbon-footprint";

import { Text } from "components";
import { t, time, calculation } from "utils";
import { Colors } from "style";

import styles from "./Transport.styles";

const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 20;

const MIN_SLIDER_VALUE_PLANE = 1;
const MAX_SLIDER_VALUE_PLANE = 20;

interface Props {
  defaultValueSlider: number;
  foodModelType: string;
  setDurationMinutes: (arg0: number) => void;
  setDistance: (arg0: number) => void;
}

const Transport: React.FC<Props> = ({
  setDurationMinutes,
  foodModelType,
  setDistance,
  defaultValueSlider,
}) => {
  const [sliderValue, setSliderValue] = useState(defaultValueSlider / 1000);

  const onSliderValueChange = (value: number) => {
    const val = Math.round(value);
    setSliderValue(val);
    /* since we use meter as reference (and not kilometers), we need to multiply by 1000 */
    setDistance(val * 1000);
    setDurationMinutes(val);
  };

  const renderDuration = () => {
    const { hours, minutes } = time.convertMinutesToHoursAnMinutes(sliderValue);

    return (
      <View style={styles.durationDistanceContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_DURATION")}</Text.H3>
        <Text.Primary lightGray>{Math.round(sliderValue) + " meal(s)."}</Text.Primary>
      </View>
    );
  };

  const renderDistance = () => {
    return (
      <View style={styles.durationDistanceContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_DISTANCE")}</Text.H3>
        <Text.Primary lightGray>{Math.round(sliderValue) + " meal(s)"}</Text.Primary>
      </View>
    );
  };

  return (
    <>
      {foodModelType === TransportType.plane ? renderDuration() : renderDistance()}
      <Slider
        minimumTrackTintColor={Colors.green50}
        maximumTrackTintColor={Colors.grey}
        thumbTintColor={Colors.green50}
        style={styles.slider}
        maximumValue={
          foodModelType === TransportType.plane ? MAX_SLIDER_VALUE_PLANE : MAX_SLIDER_VALUE
        }
        minimumValue={
          foodModelType === TransportType.plane ? MIN_SLIDER_VALUE_PLANE : MIN_SLIDER_VALUE
        }
        value={sliderValue}
        onSlidingComplete={onSliderValueChange}
      />
      <View style={styles.totalContainer}>
        <Text.H3 style={styles.miniHeader}>{t("ADD_EMISSION_SCREEN_TOTAL")}</Text.H3>
        <Text.H2 darkGray>
          <FormattedNumber
            value={
              foodModelType === TransportType.plane
                ? calculation.getFlightEmissionValue(sliderValue) *
                  transport[calculation.getFlightType(sliderValue)]
                : sliderValue * 1000 * transport[foodModelType]
            }
            maximumFractionDigits={2}
          />{" "}
          <Text.Primary>g</Text.Primary>
        </Text.H2>
      </View>
    </>
  );
};

export default Transport;
