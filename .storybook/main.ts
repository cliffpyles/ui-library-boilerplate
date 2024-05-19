import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.@(stories|story).@(js|jsx|mjs|ts|tsx)",
    // "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../src/components/Box/stories/Simple.tsx"
    // "../src/**/stories/**/*.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-themes"
  ],
  docs: {
    defaultName: 'Documentation',
  },
  framework: {
    name: "@storybook/react-vite",
    options: {
    }
  },
};
export default config;
