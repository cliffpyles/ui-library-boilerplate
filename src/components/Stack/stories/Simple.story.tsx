import React from "react";

import { Box, Stack, Text } from "../../..";
import { Cart } from "grommet-icons";

export const Simple = () => (
  <Box align="center" pad="large">
    <Stack anchor="top-right">
      <Cart size="large" />
      <Box background="orange" pad={{ horizontal: "xsmall" }} round>
        <Text size="small"> 4 </Text>
      </Box>
    </Stack>
  </Box>
);

export default {
  title: "Layout/Stack/Simple",
};
