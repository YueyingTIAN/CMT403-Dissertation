/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import throttle from "lodash.throttle";

const navigateOneTime = (navigate) => throttle(navigate, 1000, { trailing: false });

/* navigate */

const openAddNavigator = (navigation) => (props = {}) => {
  navigation.navigate("AddNavigator", props);
};

const openFavorites = (navigation) => (props = {}) => {
  navigation.navigate("FavoriteNavigator", props);
};

/* navigate - modal */

const openInfoModal = (navigation) => (props = {}) => {
  navigation.navigate("ModalNavigator", {
    screen: "InfoModal",
    params: props,
  });
};

const openComingSoonModal = (navigation) => (props = {}) => {
  navigation.navigate("ModalNavigator", {
    screen: "ComingSoonModal",
    params: props,
  });
};

/* push */

const openMontlyBudget = (navigation) => (props = {}) => {
  navigation.push("MonthlyBudget", props);
};

const openAddFavorite = (navigation) => (props = {}) => {
  navigation.push("AddFavorite", props);
};

const openRecipeDetails = (navigation) => (props = {}) => {
  navigation.push("RecipeDetail", props);
};

const openFavoriteItem = (navigation) => (props = {}) => {
  navigation.push("FavoriteItem", props);
};

const openAbout = (navigation) => (props = {}) => {
  navigation.push("About", props);
};

const openBudget = (navigation) => (props = {}) => {
  navigation.push("Budget", props);
};

const openSubCategorySelection = (navigation) => (props = {}) => {
  navigation.push("SubCategorySelection", props);
};

const openMonthlyFoods = (navigation) => (props = {}) => {
  navigation.push("MonthlyFoods", props);
};

const openLanguages = (navigation) => (props = {}) => {
  navigation.push("Languages", props);
};

const openRecurringFoods = (navigation) => (props = {}) => {
  navigation.push("RecurringFoods", props);
};

const navigate = (navigation) => ({
  goBack: navigation.goBack,
  openRecurringFoods: navigateOneTime(openRecurringFoods(navigation)),
  openMonthlyFoods: navigateOneTime(openMonthlyFoods(navigation)),
  openAddNavigator: navigateOneTime(openAddNavigator(navigation)),
  openSubCategorySelection: navigateOneTime(openSubCategorySelection(navigation)),
  openComingSoonModal: navigateOneTime(openComingSoonModal(navigation)),
  openInfoModal: navigateOneTime(openInfoModal(navigation)),
  openBudget: navigateOneTime(openBudget(navigation)),
  openMontlyBudget: navigateOneTime(openMontlyBudget(navigation)),
  openAddFavorite: navigateOneTime(openAddFavorite(navigation)),
  openRecipeDetails: navigateOneTime(openRecipeDetails(navigation)),
  openFavoriteItem: navigateOneTime(openFavoriteItem(navigation)),
  openAbout: navigateOneTime(openAbout(navigation)),
  openLanguages: navigateOneTime(openLanguages(navigation)),
  openFavorites: navigateOneTime(openFavorites(navigation)),
});

export default navigate;
