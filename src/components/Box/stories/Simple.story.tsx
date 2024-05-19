import type { Meta, StoryObj } from "@storybook/react";
import { Attraction, Car } from "grommet-icons";

// import { Anchor, Box, Button, Text } from "../../..";
import { Box, Button, Text } from "../../..";

export const SimpleBox = () => (
  <Box direction="row-responsive" justify="center" align="center" pad="xlarge" background="dark-2" gap="medium">
    <Box pad="large" align="center" background={{ color: "light-4", opacity: "strong" }} round gap="small">
      <Attraction size="large" />
      <Text>Party </Text>
      {/* <Anchor href="" label="Link" color="dark-1" /> */}
      <Button label="Button" onClick={() => {}} />
    </Box>
    <Box pad="large" align="center" background="dark-1" round gap="small">
      <Car size="large" color="light-2" />
      <Text>Travel </Text>
      {/* <Anchor href="" label="Link" /> */}
      <Button label="Button" onClick={() => {}} />
    </Box>
  </Box>
);

const meta = {
  title: "Layout/Box/Simple",
  component: SimpleBox,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SimpleBox>;

export default meta;

// type Story = StoryObj<typeof meta>;
