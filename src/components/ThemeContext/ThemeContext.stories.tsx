// src/components/ThemeContext/ThemeContext.stories.tsx
import React from "react";
import { ThemeContext } from "./ThemeContext";
import { themes } from "../../themes/themes";
import StyledBox from "../Box/StyledBox";

export default {
  title: "Components/ThemeContext",
  component: ThemeContext,
};

const Template = (args) => (
  <ThemeContext {...args}>
    <StyledBox>Content with themed context</StyledBox>
  </ThemeContext>
);

export const BrandedTheme = Template.bind({});
BrandedTheme.args = {
  theme: themes.branded,
};

export const NestedTheme = (args) => (
  <ThemeContext theme={themes.branded}>
    <StyledBox>Content with branded theme</StyledBox>
    <ThemeContext {...args}>
      <StyledBox>Content with nested custom theme</StyledBox>
    </ThemeContext>
  </ThemeContext>
);
NestedTheme.args = {
  theme: {
    global: {
      colors: {
        primary: "#123456",
      },
    },
    box: {
      background: "$global.colors.primary",
    },
  },
};
