import React from "react";

import { ComponentLibrary, Box, grommet } from "../../..";

export const ThemeMode = () => (
  <ComponentLibrary theme={grommet} themeMode="auto">
    <Box pad="medium">& quot; auto & quot; themeMode </Box>
  </ComponentLibrary>
);

export default {
  title: "Utilities/ComponentLibrary/ThemeMode",
};
