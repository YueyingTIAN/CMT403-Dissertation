import React from "react";
import { View } from "react-native";

import { Text } from "components";
import { t } from "utils";

import styles from "./PeriodBudget.styles";

interface Props {
  period: string;
  periodCaloriesBudget: number;
}

const PeriodBudget: React.FC<Props> = ({ periodCaloriesBudget = 0, period = "" }) => {
  let budget = periodCaloriesBudget.toString();
  let units = " kcal";
  // if (periodCaloriesBudget > 999) {
  //   budget = (periodCaloriesBudget / 1000).toFixed(2);
  //   units = " kcals";
  // }

  return (
    <View style={styles.container}>
      <Text.Secondary bold center>
        {t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_PERIOD_BUDGET")}
        {period}
        {" : "}
        <Text.Secondary lightGray center>
          {budget + units}
        </Text.Secondary>
      </Text.Secondary>
    </View>
  );
};

export default PeriodBudget;
