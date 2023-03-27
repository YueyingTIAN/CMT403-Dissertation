/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from "react";
import { SectionList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { filter } from "ramda";

import { FoodListItem, FoodListItemProps } from "components";
import { navigate } from "navigation";

import { SectionHeader } from "./components";
import styles from "./FavoritesScreen.styles";

interface Props {
  emissions?: any;
  recurringEmissions?: any;
}

const FavoritesScreen: React.FC<Props> = ({ emissions = [], recurringEmissions }) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const sections = filter((item) => !!item, [recurringEmissions, ...emissions]);

  const renderListFooter = () => <View style={styles.separator} />;
  const renderSectionHeader = (date, title) => <SectionHeader title={title} date={date} />;

  return (
    <SectionList<FoodListItemProps>
      style={styles.container}
      sections={sections}
      stickySectionHeadersEnabled
      ListFooterComponent={renderListFooter}
      renderSectionHeader={({ section: { date, title } }) => renderSectionHeader(date, title)}
      keyExtractor={({ id }) => id}
      renderItem={({
        item: { id, isMitigated, name, title, co2value, iconName, foodModelType, times },
      }) => (
        <FoodListItem
          id={id}
          isMitigated={isMitigated}
          name={name}
          onPress={() => navigator.openFavoriteItem({ id, isRecurringEmission: !!times })}
          title={title}
          co2value={co2value}
          iconName={iconName}
          foodModelType={foodModelType}
        />
      )}
    />
  );
};

export default FavoritesScreen;
