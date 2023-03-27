import { StyleSheet } from "react-native";

import { Layout } from "style";

export default StyleSheet.create({
  image: {
    height: 80,
    resizeMode: "contain",
    width: 80,
  },
  container: {
    ...Layout.containerWithPadding,
  },
});
