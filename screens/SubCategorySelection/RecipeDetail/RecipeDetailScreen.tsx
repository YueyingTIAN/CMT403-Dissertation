import React from "react";
import { ScrollView, useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import HTML from "react-native-render-html";

import { HTMLImage } from "components";
import { ui } from "utils";
import { NavStatelessComponent } from "interfaces";

import styles from "./RecipeDetailScreen.styles";
import navigationOptions from "./RecipeDetailScreen.navigationOptions";

const baseFontStyle = { fontSize: 18 };

const RecipeDetailScreen: NavStatelessComponent = () => {
  const route = useRoute();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { body } = route?.params;
  const contentWidth = useWindowDimensions().width;

  return (
    <ScrollView style={styles.container}>
      <HTML
        source={{ html: body }}
        contentWidth={contentWidth}
        onLinkPress={ui.onHTMLBodyLinkPress}
        baseFontStyle={baseFontStyle}
        renderers={{
          img: (attribs) => {
            const [img] = [attribs.src]
            return <HTMLImage uri={img} key={img} />;
          },
        }}
      />
    </ScrollView>
  );
};

RecipeDetailScreen.navigationOptions = navigationOptions();

export default RecipeDetailScreen;
