import React from "react";
import moment from "moment";
import "moment/min/locales";
import { View } from "react-native";
import * as Progress from "react-native-progress";

import { Layout } from "constant";
import { Text } from "components";
import { withLocalization, LocalizationContextProps, getLocaleForMoment } from "utils";
import { Colors } from "style";

import styles from "./ProgressChart.styles";
import { Legend, PeriodBudget } from "./components";

interface Props {
  isMonth?: boolean;
  totalCalories: number;
  otherfruitCalories: number;
  grainCalories: number;
  vitaminaCalories: number;
  freshfoodsCalories: number;
  dairyCalories: number;
  eggsCalories: number;
  legumesCalories: number;
  dessertCalories: number;
  nutsCalories: number;
  monthlyCaloriesBudget: number;
}

const ProgressChart = ({
  totalCalories = 0,
  otherfruitCalories = 0,
  grainCalories = 0,
  vitaminaCalories = 0,
  freshfoodsCalories = 0,
  dairyCalories = 0,
  eggsCalories = 0,
  legumesCalories = 0,
  dessertCalories = 0,
  nutsCalories = 0,
  monthlyCaloriesBudget = 0,
  isMonth = false,
  language = "",
}: Props & LocalizationContextProps) => {
  if (!monthlyCaloriesBudget) {
    return null;
  }

  const periodCaloriesBudget = isMonth ? monthlyCaloriesBudget : monthlyCaloriesBudget * 12;

  const totalCaloriesRatio = totalCalories / periodCaloriesBudget;

  const period = moment()
    .locale(getLocaleForMoment(language))
    .format(isMonth ? "MMMM" : "YYYY");

  const circleSize = Layout.screen.width < 400 ? Layout.screen.width / 2 - 10 : 200;

  return (
    <View style={styles.container}>
      <View style={styles.periodContainer}>
        <Text.H3 style={styles.header}>{period}</Text.H3>
        <Progress.Circle
          animated={false}
          showsText
          strokeCap={"round"}
          textStyle={styles.textPourcentage}
          thickness={16}
          color={totalCaloriesRatio > 1 ? Colors.apricot : Colors.green50}
          unfilledColor={Colors.green10}
          borderColor={"transparent"}
          borderWidth={2}
          progress={totalCaloriesRatio}
          size={circleSize}
        />
      </View>
      <Legend
        totalCalories={totalCalories}
        otherfruitCalories={otherfruitCalories}
        grainCalories={grainCalories}
        vitaminaCalories={vitaminaCalories}
        freshfoodsCalories={freshfoodsCalories}
        dairyCalories={dairyCalories}
        eggsCalories={eggsCalories}
        legumesCalories={legumesCalories}
        dessertCalories={dessertCalories}
        nutsCalories={nutsCalories}
      />
      <PeriodBudget period={period} periodCaloriesBudget={periodCaloriesBudget} />
    </View>
  );
};

export default withLocalization(ProgressChart);
