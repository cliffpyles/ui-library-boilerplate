import React from "react";

import { grommet, ComponentLibrary, Box, Text } from "../../..";
import { hpe } from "grommet-theme-hpe";

export const Background = () => {
  const themeColor = "background-back";
  const hexValue = "#DCD0FF";
  const cssColor = "gold";
  return (
    <Box gap="medium">
      <ComponentLibrary>
        <Box pad="medium">
          <Text>ComponentLibrary with no theme or background prop </Text>
        </Box>
      </ComponentLibrary>
      <ComponentLibrary theme={hpe} themeMode="dark">
        <Box pad="medium">
          <Text>ComponentLibrary with theme & themeMode but no background prop </Text>
        </Box>
      </ComponentLibrary>
      <ComponentLibrary theme={hpe} themeMode="light" background={themeColor}>
        <Box pad="medium">
          <Text>ComponentLibrary with background as theme color of & apos; {themeColor}& apos; </Text>
        </Box>
      </ComponentLibrary>
      <ComponentLibrary theme={grommet} background={hexValue}>
        <Box pad="medium">
          <Text>ComponentLibrary with background as HEX value of & apos; {hexValue}& apos; </Text>
        </Box>
      </ComponentLibrary>
      <ComponentLibrary theme={grommet} background={cssColor}>
        <Box pad="medium">
          <Text>ComponentLibrary with background as CSS color name of & apos; {cssColor}& apos; </Text>
        </Box>
      </ComponentLibrary>
      <ComponentLibrary
        theme={grommet}
        background={{
          color: "pink",
          image: "url(http://librelogo.org/wp-content/uploads/2014/04/gradient2.png)",
        }}
      >
        <Box pad="medium">
          <Text>ComponentLibrary with background as object containing color and image </Text>
        </Box>
      </ComponentLibrary>
    </Box>
  );
};

export default {
  title: "Utilities/ComponentLibrary/Background",
};
