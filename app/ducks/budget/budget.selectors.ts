/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { pathOr } from "ramda";

import { namespace } from "./budget.slice";

const getMonthlyCarbonBudget = (state) => pathOr(0, [namespace, "monthlyCaloriesBudget"], state);

export default {
  getMonthlyCarbonBudget,
};
