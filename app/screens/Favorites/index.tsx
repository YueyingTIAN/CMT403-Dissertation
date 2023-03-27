import React from "react";
import { useSelector } from "react-redux";

import { NoFood } from "components";
import { NavStatelessComponent } from "interfaces";
import { t } from "utils";

import { selectors } from "./ducks";
import FavoritesScreen from "./FavoritesScreen";
import navigationOptions from "./FavoritesScreen.navigationOptions";

const Budgets: NavStatelessComponent = () => {
  const favoritefoods = useSelector(selectors.getEmissions);
  const recurringFavorites = useSelector(selectors.getRecurringEmisions);
  const recurringFavoritesData = {
    title: t("FAVORITE_SCREEN_RECURRING_EMISSIONS"),
    data: recurringFavorites,
  };

  if (!favoritefoods?.length && !recurringFavorites?.length) {
    return <NoFood />;
  }

  if (favoritefoods?.length && recurringFavorites?.length) {
    return <FavoritesScreen emissions={favoritefoods} recurringEmissions={recurringFavoritesData} />;
  }

  if (!favoritefoods?.length && recurringFavorites?.length) {
    return <FavoritesScreen recurringEmissions={recurringFavoritesData} />;
  }

  if (favoritefoods?.length && !recurringFavorites?.length) {
    return <FavoritesScreen emissions={favoritefoods} />;
  }
};

Budgets.navigationOptions = navigationOptions();

export default Budgets;
