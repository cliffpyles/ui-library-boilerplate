import React, { useState } from "react";

import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import { Box, Text, ThemeContext, ComponentLibrary, Select } from "../../..";

const customTheme = deepMerge(grommet, {
  global: {
    focus: {
      border: {
        color: "red",
      },
      shadow: {
        color: "red",
      },
    },
  },
});

export const GlobalThemeWithThemeContext = () => {
  const options = ["one", "two", "three"];
  const [valueRed, setValueRed] = useState("");
  const [valueBlue, setValueBlue] = useState("");

  return (
    <ComponentLibrary theme= { customTheme } >
    <Box align="center" pad = "large" direction = "column" gap = "large" >
      <Box>
      <Text margin="medium" >
        The focus color of this select component is being altered by the custom theme that is passed into the
            ComponentLibrary component.
          < /Text>
    < Select
  alignSelf = "center"
  placeholder = "Select"
  value = { valueRed }
  options = { options }
  onChange = {({ option }) => setValueRed(option)}
/>
  < /Box>
  < Box >
  <ThemeContext.Extend
            value={
  {
    global: {
      focus: {
        border: {
          color: "blue",
                  },
      },
    },
  }
}
          >
  <Text margin="medium" >
    The focus color of this select component is being altered by ThemeContext, independent from the custom
theme
  < /Text>
  < Select
alignSelf = "center"
placeholder = "Select"
value = { valueBlue }
options = { options }
onChange = {({ option }) => setValueBlue(option)}
/>
  < /ThemeContext.Extend>
  < /Box>
  < /Box>
  < /ComponentLibrary>
  );
};

GlobalThemeWithThemeContext.storyName = "Extend";

export default {
  title: "Utilities/ThemeContext/Extend",
};
