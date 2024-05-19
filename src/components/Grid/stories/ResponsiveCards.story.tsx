import { useContext } from "react";

import { Box, Grid, ResponsiveContext, Text } from "../..";

const cards = Array(20)
  .fill()
  // eslint-disable-next-line react/no-array-index-key
  .map((_, i) => <Text key={i}>{`Card ${i}`}</Text>);

export const Example = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box pad="large">
      <Grid columns={size !== "small" ? "small" : "100%"} gap="small">
        {cards.map((card, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Box pad="large" key={index} background="white">
            {card}
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default {
  title: "Layout/Grid/Responsive cards",
};
