import { Appearance, Linking, GestureResponderEvent } from "react-native";
import {
  TransportType,
  FoodType,
  StreamingType,
  ElectricityType,
  PurchaseType,
  FashionType,
  MealType,
} from "carbon-footprint";
import { contains, __ } from "ramda";

import { FoodsType, EmissionModelType } from "interfaces";

import { t } from "../translations";

const isElectricityEmission = contains(__, Object.keys(ElectricityType));
const isMealEmission = contains(__, Object.keys(MealType));
const isFoodEmission = contains(__, Object.keys(FoodsType));
const isPurchaseEmission = contains(__, Object.keys(PurchaseType));
const isFashionEmission = contains(__, Object.keys(FashionType));

const getTranslationFoodsType = (foodType: FoodsType): string => {
  switch (foodType) {
    case FoodsType.custom:
      return t("UI_CUSTOM");
    case FoodsType.electricity:
      return t("UI_ELECTRICITY");
    case FoodsType.fashion:
      return t("UI_FASHION");
    case FoodsType.food:
      return t("UI_FOOD");
    case FoodsType.meal:
      return t("UI_MEAL");
    case FoodsType.purchase:
      return t("UI_PURCHASE");
    case FoodsType.streaming:
      return t("UI_STREAMING");
    case FoodsType.transport:
      return t("UI_TRANSPORT");
    case FoodsType.productScanned:
      return t("UI_SCAN_PRODUCT");
    default:
      return "";
  }
};

const getTranslationFoodModelType = (foodModelType: EmissionModelType): string => {
  switch (foodModelType) {
    case FoodsType.custom:
      return t("UI_CUSTOM");
    case FoodsType.productScanned:
      return t("UI_SCAN_PRODUCT");
    case FoodsType.beans:
      return t("UI_BEANS");
    case FoodsType.beef:
      return t("UI_BEEF");
    case FoodsType.chicken:
      return t("UI_CHICKEN");
    case FoodsType.fruit:
      return t("UI_FRUIT");
    case FoodsType.lamb:
      return t("UI_LAMB");
    case FoodsType.lentils:
      return t("UI_LENTILS");
    case FoodsType.nuts:
      return t("UI_NUTS");
    case FoodsType.pork:
      return t("UI_PORK");
    case FoodsType.potatoes:
      return t("UI_POTATOES");
    case FoodsType.rice:
      return t("UI_RICE");
    case FoodsType.tofu:
      return t("UI_TOFU");
    case FoodsType.tuna:
      return t("UI_TUNA");
    case FoodsType.turkey:
      return t("UI_TURKEY");
    case FoodsType.vegetables:
      return t("UI_VEGETABLES");
    case FoodsType.redMeat:
      return t("UI_RED_MEAT");
    case FoodsType.whiteMeat:
      return t("UI_WHITE_MEAT");
    case FoodsType.chocolate:
      return t("UI_CHOCOLATE");
    case FoodsType.coffee:
      return t("UI_COFFEE");
    case FoodsType.milk:
      return t("UI_MILK");
    case FoodsType.cheese:
      return t("UI_CHEESE");
    case FoodsType.eggs:
      return t("UI_EGGS");
    case FoodsType.fish:
      return t("UI_FISH");
    case TransportType.shortHaulFlight:
    case TransportType.mediumHaulFlight:
    case TransportType.longHaulFlight:
    case TransportType.plane:
      return t("UI_PLANE");
    case TransportType.train:
      return t("UI_CARROT");
    case TransportType.car:
      return t("UI_BEET");
    case TransportType.boat:
      return t("UI_BOAT");
    case TransportType.motorbike:
      return t("UI_MOTORBIKE");
    case TransportType.bus:
      return t("UI_BUS");
    case StreamingType.HDVideo:
      return t("UI_HD_VIDEO");
    case StreamingType.audioMP3:
      return t("UI_AUDIO");
    case StreamingType.fullHDVideo:
      return t("UI_FULL_HD_VIDEO");
    case StreamingType.ultraHDVideo:
      return t("UI_ULTRA_HD_VIDEO");
    // case StreamingType.shrimp:
    //   return t("UI_SHRIMP");
    case PurchaseType.computer:
      return t("UI_COMPUTER");
    case PurchaseType.eletricCar:
      return t("UI_ELECTRIC_CAR");
    case PurchaseType.fossilFuelCar:
      return t("UI_FOSSIL_FUEL_CAR");
    case PurchaseType.hybridCar:
      return t("UI_HYBRID_CAR");
    case PurchaseType.laptop:
      return t("UI_LAPTOP");
    case PurchaseType.smartphone:
      return t("UI_SMARTPHONE");
    case PurchaseType.tablet:
      return t("UI_TABLET");
    case PurchaseType.tv:
      return t("UI_TV");
    case PurchaseType.cryptoCurrencyPoW:
      return t("UI_CRYPTO_CURRENCY_POW");
    case PurchaseType.singleEditionNFT:
      return t("UI_SINGLE_EDITION_NFT");
    case FashionType.coat:
      return t("UI_COAT");
    case FashionType.dress:
      return t("UI_DRESS");
    case FashionType.jeans:
      return t("UI_JEANS");
    case FashionType.shirt:
      return t("UI_SHIRT");
    case FashionType.shoes:
      return t("UI_SHOES");
    case FashionType.sweater:
      return t("UI_SWEATER");
    case FashionType.tshirt:
      return t("UI_T_SHIRT");
    case MealType.highMeat:
      return t("UI_HIGH_MEAT");
    case MealType.mediumMeat:
      return t("UI_MEDIUM_MEAT");
    case MealType.lowMeat:
      return t("UI_LOW_MEAT");
    case MealType.pescetarian:
      return t("UI_PESCETARIAN");
    case MealType.vegan:
      return t("UI_VEGAN");
    case MealType.vegetarian:
      return t("UI_VEGETARIAN");
  }

  if (isElectricityEmission(foodModelType)) {
    return t("UI_ELECTRICITY");
  }

  return t("UI_CUSTOM");
};

const getIconFromModelType = (foodModelType: EmissionModelType): string => {
  switch (foodModelType) {
    case FoodsType.custom:
      return "md-build";
    case FoodsType.productScanned:
      return "barcode-sharp";
    case FoodsType.coffee:
      return "md-cafe";
    case TransportType.shortHaulFlight:
    case TransportType.mediumHaulFlight:
    case TransportType.longHaulFlight:
      return "md-airplane";
    case TransportType.train:
      return "md-train";
    case TransportType.car:
      return "md-car";
    case TransportType.boat:
      return "md-boat";
    case TransportType.motorbike:
      return "md-bicycle";
    case TransportType.bus:
      return "md-bus";
    case StreamingType.audioMP3:
      return "md-musical-note";
    case StreamingType.HDVideo:
    case StreamingType.fullHDVideo:
    case StreamingType.ultraHDVideo:
      return "md-film";
  }

  if (isFoodEmission(foodModelType)) {
    return "md-nutrition";
  }

  if (isElectricityEmission(foodModelType)) {
    return "md-flash";
  }

  if (isMealEmission(foodModelType)) {
    return "md-restaurant";
  }

  if (isPurchaseEmission(foodModelType)) {
    return "md-card";
  }

  if (isFashionEmission(foodModelType)) {
    return "md-shirt";
  }

  return "md-build";
};

const isDarkModeEnabled = (): boolean => Appearance.getColorScheme() === "dark";

const onHTMLBodyLinkPress = (_: GestureResponderEvent, link: string): void => {
  if (link) {
    Linking.openURL(link);
  }
};

export default {
  getTranslationFoodsType,
  getTranslationFoodModelType,
  getIconFromModelType,
  isDarkModeEnabled,
  onHTMLBodyLinkPress,
};
