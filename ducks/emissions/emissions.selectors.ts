/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { filter, propEq, find, pathOr, pipe } from "ramda";

import { FoodsType } from "interfaces";

import { namespace } from "./emissions.slice";

const getAllEmissions = pathOr([], [namespace]);

const getFoodById = (state, id: string) => find(propEq("id", id))(state[namespace]);

const getEmissionsToMitigate = (state) =>
  pipe(getAllEmissions, filter(propEq("isMitigated", false)))(state);

const getEmissionsMitigated = (state) =>
  pipe(getAllEmissions, filter(propEq("isMitigated", true)))(state);

const isTransportEmission = (emission) => emission.foodType === FoodsType.transport;

const isFoodEmission = (emission) => emission.foodType === FoodsType.food;

const isPurchaseEmission = (emission) => emission.foodType === FoodsType.purchase;

const isFashionEmission = (emission) => emission.foodType === FoodsType.fashion;

const isStreamingEmission = (emission) => emission.foodType === FoodsType.streaming;

const isElectricityEmission = (emission) => emission.foodType === FoodsType.electricity;

const isCustomEmission = (emission) => emission.foodType === FoodsType.custom;

const isMealEmission = (emission) => emission.foodType === FoodsType.meal;

const isProductScannedEmission = (emission) =>
  emission.foodType === FoodsType.productScanned;

const isEatableEmission = (emission) =>
  emission.foodType === FoodsType.meal || emission.foodType === FoodsType.food;

const isOtherEmission = (emission) =>
  emission.foodType === FoodsType.custom ||
  emission.foodType === FoodsType.streaming ||
  emission.foodType === FoodsType.electricity ||
  emission.foodType === FoodsType.fashion ||
  emission.foodType === FoodsType.purchase ||
  emission.foodType === FoodsType.meal;

const getTransportEmissions = pipe(getAllEmissions, filter(isTransportEmission));

const getFoodEmissions = pipe(getAllEmissions, filter(isFoodEmission));

const getStreamingEmissions = pipe(getAllEmissions, filter(isStreamingEmission));

const getElectricityEmissions = pipe(getAllEmissions, filter(isElectricityEmission));

const getPurchaseEmissions = pipe(getAllEmissions, filter(isPurchaseEmission));

const getFashionEmissions = pipe(getAllEmissions, filter(isFashionEmission));

const getMealEmissions = pipe(getAllEmissions, filter(isMealEmission));

const getEatableEmissions = pipe(getAllEmissions, filter(isEatableEmission));

const getCustomEmissions = pipe(getAllEmissions, filter(isCustomEmission));

const getProductScanned = pipe(getAllEmissions, filter(isProductScannedEmission));

const getOtherEmissions = pipe(getAllEmissions, filter(isOtherEmission));

export default {
  getAllEmissions,
  getTransportEmissions,
  getFoodEmissions,
  getStreamingEmissions,
  getElectricityEmissions,
  getFashionEmissions,
  getPurchaseEmissions,
  getCustomEmissions,
  getProductScanned,
  getOtherEmissions,
  getMealEmissions,
  getEatableEmissions,
  getFoodById,
  getEmissionsToMitigate,
  getEmissionsMitigated,
};
