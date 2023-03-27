/* eslint import/order:0 */
/* SCREENS */
import * as Recipe from "../../screens/Recipe/translations";
import * as Budget from "../../screens/Budget/translations";
import * as Favorites from "../../screens/Favorites/translations";
import * as Settings from "../../screens/Settings/translations";
import * as MonthlyBudget from "../../screens/MonthlyBudget/translations";
import * as AddFavorite from "../../screens/AddFavorite/translations";
import * as FavoriteItem from "../../screens/FavoriteItem/translations";
import * as Intro from "../../screens/Intro/translations";
import * as About from "../../screens/About/translations";
import * as RecipeDetail from "../../screens/RecipeDetail/translations";
import * as CategorySelection from "../../screens/CategorySelection/translations";
import * as SubCategorySelection from "../../screens/SubCategorySelection/translations";
import * as MonthlyFoods from "../../screens/MonthlyFoods/translations";
import * as Languages from "../../screens/Languages/translations";
import * as RecurringFoods from "../../screens/RecurringFoods/translations";

/* COMPONENTS */
import * as NoFood from "components/NoFood/translations";
import * as PermissionsRequest from "components/PermissionsRequest/translations";

/* UTILS */
import * as UI from "utils/ui/translations";

const en = {
  ...Recipe.en,
  ...Budget.en,
  ...Favorites.en,
  ...Settings.en,
  ...MonthlyBudget.en,
  ...AddFavorite.en,
  ...FavoriteItem.en,
  ...Intro.en,
  ...About.en,
  ...RecipeDetail.en,
  ...CategorySelection.en,
  ...SubCategorySelection.en,
  ...MonthlyFoods.en,
  ...Languages.en,
  ...RecurringFoods.en,
  ...NoFood.en,
  ...PermissionsRequest.en,
  ...UI.en,
};

const zh = {
  ...UI.zh,
  ...About.zh,
  ...MonthlyBudget.zh,
  ...NoFood.zh,
  ...Recipe.zh,
  ...Budget.zh,
  ...Favorites.zh,
  ...Settings.zh,
  ...AddFavorite.zh,
  ...FavoriteItem.zh,
  ...Intro.zh,
  ...RecipeDetail.zh,
  ...CategorySelection.zh,
  ...SubCategorySelection.zh,
  ...MonthlyFoods.zh,
  ...Languages.zh,
  ...RecurringFoods.zh,
  ...PermissionsRequest.zh,
};

export interface TranslationKeys
  extends UI.TranslationKeys,
    MonthlyBudget.TranslationKeys,
    NoFood.TranslationKeys,
    Recipe.TranslationKeys,
    Budget.TranslationKeys,
    Favorites.TranslationKeys,
    AddFavorite.TranslationKeys,
    FavoriteItem.TranslationKeys,
    Settings.TranslationKeys,
    Intro.TranslationKeys,
    About.TranslationKeys,
    CategorySelection.TranslationKeys,
    SubCategorySelection.TranslationKeys,
    MonthlyFoods.TranslationKeys,
    RecipeDetail.TranslationKeys,
    Languages.TranslationKeys,
    PermissionsRequest.TranslationKeys,
    RecurringFoods.TranslationKeys {}

export { en, zh };
