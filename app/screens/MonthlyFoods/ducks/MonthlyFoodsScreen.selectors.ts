/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { filter, map, pipe } from "ramda";
import moment from "moment";

import { FoodListItemProps } from "components";
import { emissions } from "ducks";
import { Emission } from "interfaces";
import { calculation, ui } from "utils";

const getFoodListItem = (item: Emission) => {
  const emissionItem: FoodListItemProps = {
    ...item,
    title: ui.getTranslationFoodModelType(item.foodModelType),
    co2value: calculation.getC02ValueFromEmission(item),
    iconName: ui.getIconFromModelType(item.foodModelType),
    onPress: () => {
      // do nothing.
    },
  };

  return emissionItem;
};

/* moment().utc().toISOString() gives "YYYY-MM-DDTHH:mm:ss.sssZ" */
const filterByMostRecent = (array: FoodListItemProps[]) =>
  array.sort((a, b) => +new Date(b.creationDate) - +new Date(a.creationDate));

const filterByMonth = (emissions: FoodListItemProps[], date: string) =>
  filter((emission) => moment(emission.creationDate).isSame(date, "month"), emissions);

const getAllEmissions = (state) =>
  pipe(emissions.selectors.getAllEmissions, map(getFoodListItem))(state);

const getMonthlyEmission = (state, date) => filterByMonth(getAllEmissions(state), date);

const getEmissions = (state, date) => filterByMostRecent(getMonthlyEmission(state, date));

export default {
  getEmissions,
};
