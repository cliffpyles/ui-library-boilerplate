// Filename: ./src/components/Box/Box.stories.jsx
import React from "react";
import { Box } from "./Box";

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {
    a11yTitle: { control: "text" },
    alignSelf: { control: "select", options: ["start", "center", "end", "stretch", "baseline"] },
    gridArea: { control: "text" },
    margin: { control: "text" },
    align: { control: "select", options: ["baseline", "center", "end", "start", "stretch"] },
    alignContent: {
      control: "select",
      options: ["around", "baseline", "between", "center", "evenly", "end", "start", "stretch"],
    },
    animation: { control: "text" },
    background: { control: "text" },
    basis: { control: "text" },
    border: { control: "text" },
    direction: { control: "select", options: ["row", "column", "row-responsive", "row-reverse", "column-reverse"] },
    elevation: { control: "select", options: ["none", "xsmall", "small", "medium", "large", "xlarge"] },
    flex: { control: "boolean" },
    fill: { control: "boolean" },
    focusIndicator: { control: "boolean" },
    gap: { control: "text" },
    height: { control: "text" },
    hoverIndicator: { control: "boolean" },
    justify: { control: "select", options: ["around", "between", "center", "end", "evenly", "start", "stretch"] },
    onClick: { action: "clicked" },
    overflow: { control: "text" },
    pad: { control: "text" },
    responsive: { control: "boolean" },
    round: { control: "text" },
    skeleton: { control: "boolean" },
    tag: { control: "text" },
    width: { control: "text" },
    wrap: { control: "boolean" },
  },
};

const Template = (args) => <Box {...args}>Content</Box>;

export const Default = Template.bind({});
Default.args = {
  a11yTitle: "Accessible Box",
  alignSelf: "center",
  margin: "medium",
  background: "lightgrey",
  pad: "medium",
  round: "small",
};

export const WithSkeleton = Template.bind({});
WithSkeleton.args = {
  a11yTitle: "Loading Box",
  skeleton: true,
  height: "200px",
  width: "200px",
  background: "lightgrey",
};

export const ClickableBox = Template.bind({});
ClickableBox.args = {
  a11yTitle: "Clickable Box",
  onClick: () => alert("Box clicked!"),
  background: "lightblue",
  pad: "medium",
  round: "small",
};

export const FlexBox = Template.bind({});
FlexBox.args = {
  a11yTitle: "Flex Box",
  direction: "row",
  align: "center",
  justify: "between",
  pad: "small",
  background: "lightgreen",
  children: (
    <>
      <div style={{ background: "red", width: "50px", height: "50px" }}></div>
      <div style={{ background: "blue", width: "50px", height: "50px" }}></div>
    </>
  ),
};
