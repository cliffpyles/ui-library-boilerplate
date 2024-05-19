import React from "react";

import { Box, RoutedButton as ComponentLibraryRoutedButton, Text } from "../../..";

export const RoutedButton = () => (
  <Box align="center" pad="large">
    <Text margin="medium" size="small">
      Note: RoutedButton will soon be deprecated
    </Text>
    <ComponentLibraryRoutedButton label="Go" path="/" />
  </Box>
);

export default {
  title: "Controls/Button/Routed button",
};
