import React, { useCallback, useState } from "react";
import moment, { Moment } from "moment";
import { useSelector } from "react-redux";
import { View } from "react-native";
import { TransportType } from "carbon-footprint";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import { pathOr } from "ramda";

import { navigate } from "navigation";
import { Text, TextInput, TextButton } from "components";
import { userPreferences } from "ducks";
import {
  FoodsType,
  EmissionPayload,
  EmissionModelType,
  PeriodicityType,
  WeekDays,
} from "interfaces";
import {
  calculation,
  t,
  withLocalization,
  LocalizationContextProps,
  ui,
  time,
  getLocaleForMoment,
} from "utils";

import styles from "./AddFavoriteScreen.styles";
import navigationOptions from "./AddFavoriteScreen.navigationOptions";
import {
  Food,
  Transport,
  Streaming,
  Custom,
  Electricity,
  Purchase,
  AddFavoriteButton,
  Fashion,
  Meal,
  ProductScanned,
} from "./components";

/* multiply or divide by 1000 to have kilograms or meters */
const DEFAULT_SLIDER_VALUE_FOOD = 1 / 1000;
const DEFAULT_SLIDER_VALUE_TRANSPORT = 1 * 1000;
const DEFAULT_SLIDER_VALUE_ELECTRICITY = 1;
const DEFAULT_SLIDER_VALUE_STREAMING = 1;
const DEFAULT_SLIDER_VALUE_PURCHASE = 1;
const DEFAULT_SLIDER_VALUE_FASHION = 1;
const DEFAULT_SLIDER_VALUE_MEAL = 1;
const DEFAULT_SLIDER_VALUE_CUSTOM = 1;
const EMISSION_NAME_MAX_LENGTH = 150;

const getProductCarbonFootprint = pathOr(0, ["params", "productCarbonFootprint"]);
const getName = pathOr("", ["params", "name"]);
const getNutriscoreGrade = pathOr("", ["params", "nutriscoreGrade"]);
const getNovaGroup = pathOr(-1, ["params", "novaGroup"]);
const getEcoScore = pathOr("", ["params", "ecoScore"]);
const getPeriodType = pathOr(PeriodicityType.monthly, ["params", "periodType"]);
const getPeriodWeekDays = pathOr([], ["params", "periodWeekDays"]);
const getPeriodTimes = pathOr(0, ["params", "periodTimes"]);

const AddFavoriteScreen = ({ locale = "", language = "" }: LocalizationContextProps) => {
  const route = useRoute();
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const location = useSelector(userPreferences.selectors.getLocation);
  const [emissionName, setEmissionName] = useState<string>("");
  const [electricityConsumption, setElectricityConsumption] = useState<number>(
    DEFAULT_SLIDER_VALUE_ELECTRICITY
  );
  const [durationMinutes, setDurationMinutes] = useState<number>(
    DEFAULT_SLIDER_VALUE_TRANSPORT / 1000
  );
  const [durationSeconds, setDurationSeconds] = useState<number>(DEFAULT_SLIDER_VALUE_STREAMING);
  const [co2eqKilograms, setCo2eqKilograms] = useState<number>(DEFAULT_SLIDER_VALUE_CUSTOM);
  const [distance, setDistance] = useState<number>(DEFAULT_SLIDER_VALUE_TRANSPORT);
  const [foodQuantity, setFoodQuantity] = useState<number>(DEFAULT_SLIDER_VALUE_FOOD);
  const [purchaseQuantity, setPurchaseQuantity] = useState<number>(DEFAULT_SLIDER_VALUE_PURCHASE);
  const [fashionQuantity, setFashionQuantity] = useState<number>(DEFAULT_SLIDER_VALUE_FASHION);
  const [mealQuantity, setMealQuantity] = useState<number>(DEFAULT_SLIDER_VALUE_MEAL);

  const [creationDate, setCreationDate] = useState<Moment>(moment().utc());

  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
  const showDatePicker = useCallback(() => setDatePickerVisibility(true), []);
  const hideDatePicker = useCallback(() => setDatePickerVisibility(false), []);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const foodType: FoodsType = route.params?.foodType;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const foodModelType: EmissionModelType = route.params?.foodModelType;

  // if it's a product scanned
  const productCarbonFootprint = getProductCarbonFootprint(route);
  const name: string = getName(route);
  const nutriscoreGrade: string = getNutriscoreGrade(route);
  const novaGroup: number = getNovaGroup(route);
  const ecoScore: string = getEcoScore(route);

  const periodType: PeriodicityType = getPeriodType(route);
  const periodWeekDays: Array<WeekDays> = getPeriodWeekDays(route);
  const periodTimes: number = getPeriodTimes(route);

  let periodicityText = t("ADD_EMISSION_SCREEN_NON_RECURRING");

  if (periodTimes) {
    periodicityText = calculation.getPeriodicityText({
      times: periodTimes,
      periodType,
      weekDays: periodWeekDays,
    });
  }

  const handleConfirm = useCallback(
    (date: Date) => {
      hideDatePicker();
      const now = new Date();
      const effectiveCreationDate = time.getEarlierDate(date, now);
      setCreationDate(moment(effectiveCreationDate));
    },
    [hideDatePicker]
  );

  const emissionPayload: EmissionPayload = {
    creationDate: creationDate.toISOString(),
    name: "",
    foodType: foodType,
    value: 0,
    foodModelType,
  };

  const renderTransport = () => {
    if (foodType === FoodsType.transport) {
      if (foodModelType === TransportType.plane) {
        emissionPayload.value = calculation.getFlightEmissionValue(durationMinutes);
        emissionPayload.foodModelType = calculation.getFlightType(durationMinutes);
      } else {
        emissionPayload.value = distance;
      }

      return (
        <Transport
          defaultValueSlider={DEFAULT_SLIDER_VALUE_TRANSPORT}
          setDistance={setDistance}
          setDurationMinutes={setDurationMinutes}
          foodModelType={foodModelType}
        />
      );
    }
    return null;
  };

  const renderElectricity = () => {
    if (foodType === FoodsType.electricity) {
      emissionPayload.value = electricityConsumption;
      emissionPayload.foodModelType = location;

      return (
        <Electricity
          electricityCountry={location}
          defaultValueSlider={DEFAULT_SLIDER_VALUE_ELECTRICITY}
          setElectricityConsumption={setElectricityConsumption}
        />
      );
    }
    return null;
  };

  const renderPurchase = () => {
    if (foodType === FoodsType.purchase) {
      emissionPayload.value = purchaseQuantity;

      return (
        <Purchase
          foodModelType={foodModelType}
          defaultValueSlider={DEFAULT_SLIDER_VALUE_PURCHASE}
          setQuantity={setPurchaseQuantity}
        />
      );
    }
    return null;
  };

  const renderMeal = () => {
    if (foodType === FoodsType.meal) {
      emissionPayload.value = mealQuantity;

      return (
        <Meal
          foodModelType={foodModelType}
          defaultValueSlider={DEFAULT_SLIDER_VALUE_MEAL}
          setQuantity={setMealQuantity}
        />
      );
    }
    return null;
  };

  const renderFashion = () => {
    if (foodType === FoodsType.fashion) {
      emissionPayload.value = fashionQuantity;

      return (
        <Fashion
          foodModelType={foodModelType}
          defaultValueSlider={DEFAULT_SLIDER_VALUE_FASHION}
          setQuantity={setFashionQuantity}
        />
      );
    }
    return null;
  };

  const renderFood = () => {
    if (foodType === FoodsType.food) {
      emissionPayload.value = foodQuantity;

      return (
        <Food
          defaultValueSlider={DEFAULT_SLIDER_VALUE_FOOD}
          setQuantity={setFoodQuantity}
          foodModelType={foodModelType}
        />
      );
    }
    return null;
  };

  const renderStreaming = () => {
    if (foodType === FoodsType.streaming) {
      emissionPayload.value = durationSeconds;
      emissionPayload.location = location;

      return (
        <Streaming
          electricityCountry={location}
          defaultValueSlider={DEFAULT_SLIDER_VALUE_STREAMING}
          setDurationSeconds={setDurationSeconds}
          foodModelType={foodModelType}
        />
      );
    }
    return null;
  };

  const renderCustom = () => {
    if (foodType === FoodsType.custom) {
      emissionPayload.value = co2eqKilograms;
      emissionPayload.foodModelType = FoodsType.custom as EmissionModelType;

      return (
        <Custom
          defaultValueSlider={DEFAULT_SLIDER_VALUE_CUSTOM}
          setCo2eqKilograms={setCo2eqKilograms}
        />
      );
    }
    return null;
  };

  const renderProductScanned = () => {
    if (foodType === FoodsType.productScanned) {
      emissionPayload.value = co2eqKilograms;
      emissionPayload.foodModelType = FoodsType.productScanned as EmissionModelType;

      return (
        <ProductScanned
          productCarbonFootprint={productCarbonFootprint}
          setCo2eqKilograms={setCo2eqKilograms}
        />
      );
    }
    return null;
  };

  const isDarkModeEnabled = ui.isDarkModeEnabled();

  const onChangeEmissionName = useCallback((name: string) => {
    if (name.length < EMISSION_NAME_MAX_LENGTH) {
      setEmissionName(name);
    }
  }, []);

  return (
    <KeyboardAwareScrollView style={styles.container}>
      {foodType == FoodsType.productScanned && !!name && (
        <View style={styles.textContainer}>
          <Text.H2 style={styles.text}>{t("ADD_EMISSION_SCREEN_NAME")}</Text.H2>
          <Text.Primary lightGray style={styles.text}>
            {name}
          </Text.Primary>
        </View>
      )}

      {foodType == FoodsType.productScanned && !name && (
        <TextInput
          isOptional
          placeholder={t("ADD_EMISSION_SCREEN_TEXTINPUT_PLACEHOLDER")}
          title={t("ADD_EMISSION_SCREEN_NAME_EMISSION")}
          onChangeText={onChangeEmissionName}
          value={emissionName}
        />
      )}

      {foodType != FoodsType.productScanned && (
        <View style={styles.textContainer}>
          <Text.H2 style={styles.text}>{ui.getTranslationFoodsType(foodType)}</Text.H2>
          <Text.Primary lightGray style={styles.text}>
            {ui.getTranslationFoodModelType(foodModelType)}
          </Text.Primary>
        </View>
      )}

      {renderTransport()}
      {renderFood()}
      {renderStreaming()}
      {renderElectricity()}
      {renderPurchase()}
      {renderFashion()}
      {renderMeal()}
      {renderCustom()}
      {renderProductScanned()}

      <DateTimePickerModal
        headerTextIOS={t("ADD_EMISSION_SCREEN_PICKER_MODAL_HEADER_TEXT")}
        confirmTextIOS={t("ADD_EMISSION_SCREEN_PICKER_MODAL_CONFIRM")}
        cancelTextIOS={t("ADD_EMISSION_SCREEN_PICKER_MODAL_CANCEL")}
        locale={locale}
        isVisible={isDatePickerVisible}
        isDarkModeEnabled={isDarkModeEnabled}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {!periodTimes ? (
        <View style={styles.textContainer}>
          <Text.H3>{t("ADD_EMISSION_SCREEN_DATE")}</Text.H3>
          <View style={styles.textButtonContainer}>
            <TextButton
              onPress={showDatePicker}
              iconLeft={"calendar"}
              text={creationDate.locale(getLocaleForMoment(language)).format("dddd Do MMMM YYYY")}
            />
          </View>
        </View>
      ) : null}

      <AddFavoriteButton
        emissionPayload={{
          ...emissionPayload,
          name: emissionName || name,
          creationDate: creationDate.toISOString(),
        }}
        periodType={periodType}
        periodWeekDays={periodWeekDays}
        periodTimes={periodTimes}
      />
    </KeyboardAwareScrollView>
  );
};

AddFavoriteScreen.navigationOptions = navigationOptions;

export default withLocalization(AddFavoriteScreen);
