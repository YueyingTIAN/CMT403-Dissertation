/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { map, pipe } from "ramda";

import { FoodListItemProps } from "components";
import { recurringEmissions } from "ducks";
import { Emission } from "interfaces";
import { calculation, ui } from "utils";

const getFoodListItem = (item: Emission) => {
  const emissionItem: FoodListItemProps = {
    ...item,
    title: ui.getTranslationFoodModelType(item.foodModelType),
    co2value: calculation.getC02ValueFromEmission(item),
    iconName: ui.getIconFromModelType(item.foodModelType),
    onPress: () => null,
  };

  return emissionItem;
};

/* moment().utc().toISOString() gives "YYYY-MM-DDTHH:mm:ss.sssZ" */
const filterByMostRecent = (array: FoodListItemProps[]) =>
  array.sort((a, b) => +new Date(b.creationDate) - +new Date(a.creationDate));

const getAllRecurringFoods = (state) =>
  pipe(
    recurringEmissions.selectors.getAllRecurringFoods,
    map(getFoodListItem),
    filterByMostRecent
  )(state);

export default {
  getAllRecurringFoods,
};
