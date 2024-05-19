import React from "react";

import { ComponentLibrary, Anchor, Box } from "../../..";
import { Add } from "grommet-icons";

const customTheme = {
  global: {
    colors: {
      custom: "#cc6633",
    },
  },
};

export const Theme = () => (
  <ComponentLibrary theme={customTheme}>
    <Box pad="medium">
      <Anchor icon={<Add />} label="Add" color="custom" />
    </Box>
  </ComponentLibrary>
);

export default {
  title: "Utilities/ComponentLibrary/Theme",
};
