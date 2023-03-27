import React from "react";
import { View } from "react-native";

import { t } from "utils";

import styles from "./Legend.styles";
import LegendItem from "../LegendItem";

interface Props {
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
}

const Legend: React.FC<Props> = ({
  totalCalories,
  otherfruitCalories,
  grainCalories,
  vitaminaCalories,
  freshfoodsCalories,
  dairyCalories,
  eggsCalories,
  legumesCalories,
  dessertCalories,
  nutsCalories,
}) => {
  const items = [
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_FOOD"),
      value: otherfruitCalories,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_MEAL"),
      value: grainCalories,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_TRANSPORT"),
      value: vitaminaCalories,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_STREAMING"),
      value: freshfoodsCalories,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_PURCHASE"),
      value: dairyCalories,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_FASHION"),
      value: eggsCalories,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_ELECTRICITY"),
      value: legumesCalories,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_PRODUCT_SCANNED"),
      value: dessertCalories,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_CUSTOM"),
      value: nutsCalories,
    },
    {
      name: t("BUDGET_SCREEN_PROGRESS_CHART_LEGEND_ITEM_TOTAL"),
      value: totalCalories,
    },
  ];

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <LegendItem key={index} name={item.name} amount={item.value} totalAmount={totalCalories} />
      ))}
    </View>
  );
};

export default Legend;
