import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Button } from "components";
import { t } from "utils";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";

import styles from "./BudgetScreen.styles";
import { NumberOfDaysVegetarian, ProgressChart } from "./components";
import { selectors } from "./ducks";
import navigationOptions from "./BudgetScreen.navigationOptions";

const BudgetScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const monthlyCaloriesBudget = useSelector(selectors.getMonthlyCarbonBudget);

  const otherfruitCurrentMonthCalories = useSelector(selectors.getCurrentMonthFoodCarbonValue);
  const grainCurrentMonthCalories = useSelector(selectors.getCurrentMonthMealCarbonValue);
  const vitaminaCurrentMonthCalories = useSelector(selectors.getCurrentMonthTransportCarbonValue);
  const freshfoodsCurrentMonthCalories = useSelector(selectors.getCurrentMonthStreamingCarbonValue);
  const dairyCurrentMonthCalories = useSelector(selectors.getCurrentMonthPurchaseCarbonValue);
  const eggsCurrentMonthCalories = useSelector(selectors.getCurrentMonthFashionCarbonValue);
  const legumesCurrentMonthCalories = useSelector(
    selectors.getCurrentMonthElectricityCarbonValue
  );
  const dessertCurrentMonthCalories = useSelector(
    selectors.getCurrentMonthProductScannedCarbonValue
  );
  const nutsCurrentMonthCalories = useSelector(selectors.getCurrentMonthCustomCarbonValue);
  const totalCurrentMonthCalories = useSelector(selectors.getCurrentMonthAllCarbonValue);

  const otherfruitCurrentYearCalories = useSelector(selectors.getCurrentYearFoodCarbonValue);
  const grainCurrentYearCalories = useSelector(selectors.getCurrentYearMealCarbonValue);
  const vitaminaCurrentYearCalories = useSelector(selectors.getCurrentYearTransportCarbonValue);
  const freshfoodsCurrentYearCalories = useSelector(selectors.getCurrentYearStreamingCarbonValue);
  const dairyCurrentYearCalories = useSelector(selectors.getCurrentYearPurchaseCarbonValue);
  const eggsCurrentYearCalories = useSelector(selectors.getCurrentYearFashionCarbonValue);
  const legumesCurrentYearCalories = useSelector(
    selectors.getCurrentYearElectricityCarbonValue
  );
  const dessertCurrentYearCalories = useSelector(
    selectors.getCurrentYearProductScannedCarbonValue
  );
  const nutsCurrentYearCalories = useSelector(selectors.getCurrentYearCustomCarbonValue);
  const totalCurrentYearCalories = useSelector(selectors.getCurrentYearAllCarbonValue);

  return (
    <ScrollView style={styles.container}>
      <ProgressChart
        isMonth
        totalCalories={totalCurrentMonthCalories}
        otherfruitCalories={otherfruitCurrentMonthCalories}
        grainCalories={grainCurrentMonthCalories}
        vitaminaCalories={vitaminaCurrentMonthCalories}
        freshfoodsCalories={freshfoodsCurrentMonthCalories}
        dairyCalories={dairyCurrentMonthCalories}
        eggsCalories={eggsCurrentMonthCalories}
        legumesCalories={legumesCurrentMonthCalories}
        dessertCalories={dessertCurrentMonthCalories}
        nutsCalories={nutsCurrentMonthCalories}
        monthlyCaloriesBudget={monthlyCaloriesBudget}
      />
      <Button.Primary
        icon={"calendar"}
        style={styles.monthlyBudgetButton}
        fullWidth
        text={t("BUDGET_SCREEN_SET_MONTHLY_BUDGET")}
        onPress={() => navigator.openMontlyBudget()}
      />
      <NumberOfDaysVegetarian />
      <ProgressChart
        totalCalories={totalCurrentYearCalories}
        otherfruitCalories={otherfruitCurrentYearCalories}
        grainCalories={grainCurrentYearCalories}
        vitaminaCalories={vitaminaCurrentYearCalories}
        freshfoodsCalories={freshfoodsCurrentYearCalories}
        dairyCalories={dairyCurrentYearCalories}
        eggsCalories={eggsCurrentYearCalories}
        legumesCalories={legumesCurrentYearCalories}
        dessertCalories={dessertCurrentYearCalories}
        nutsCalories={nutsCurrentYearCalories}
        monthlyCaloriesBudget={monthlyCaloriesBudget}
      />
    </ScrollView>
  );
};

BudgetScreen.navigationOptions = navigationOptions();

export default BudgetScreen;
