/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { propEq, find, pathOr } from "ramda";

import { namespace } from "./recurringEmissions.slice";

const getAllRecurringFoods = pathOr([], [namespace]);

const getRecurringEmissionById = (state, id: string) => find(propEq("id", id))(state[namespace]);

export default {
  getAllRecurringFoods,
  getRecurringEmissionById,
};
