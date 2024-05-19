import React, { useContext } from "react";

import { Box, Button, Card, ComponentLibrary, Image, Text, ThemeContext } from "../../..";
import { FormAdd } from "grommet-icons";

const Item = ({ ...rest }) => (
  <Card width="531px" pad="medium" gap="large" round="medium" flex="grow" border {...rest}>
    <Box direction="row" gap="large" justify="between" align="center">
      <Box direction="row" gap="medium">
        <Box width="xsmall" height="xsmall" background="orange!" round="small">
          <Image />
        </Box>
        <Box>
          <Text size="large" color="text-strong" weight="bold" skeleton={{ width: "small" }}>
            Compliance
          </Text>
          <Text size="small"> Acme Company Inc </Text>
        </Box>
      </Box>
      <Button label="Add" reverse icon={<FormAdd />} secondary />
    </Box>
  </Card>
);

const skeleton = { animation: "fadeIn" };

const Content = () => (
  <Box fill align="center" pad="large" gap="medium" skeleton={skeleton}>
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </Box>
);

export const Group = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <ComponentLibrary theme={theme}>
        <Content />
      </ComponentLibrary>
      <ComponentLibrary theme={theme} themeMode="dark">
        <Content />
      </ComponentLibrary>
    </>
  );
};

Group.parameters = {
  chromatic: { disable: true },
};

export default {
  title: "Visualizations/Skeleton/Group",
};
