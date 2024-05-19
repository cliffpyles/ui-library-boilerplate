import type { Preview } from "@storybook/react";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ComponentLibrary } from '../src/components'
/* TODO: update import for your custom theme configurations */
import { base, dark } from '../src/themes';

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  `;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // globalTypes: {
  //   theme: {
  //     name: "Theme",
  //     description: "Global theme for components",
  //     defaultValue: "branded",
  //     toolbar: {
  //       icon: "circlehollow",
  //       items: [
  //         { value: "light", title: "Light" },
  //         { value: "dark", title: "Dark" },
  //         { value: "branded", title: "Branded" },
  //       ],
  //     },
  //   },
  // },
  // decorators: [withThemeFromJSXProvider({
  //   themes: themes,
  //   defaultTheme: 'branded',
  //   Provider: ThemeProvider,
  //   GlobalStyles,
  // })],
  decorators: [withThemeFromJSXProvider({
    themes: { base, dark },
    defaultTheme: 'base',
    Provider: ComponentLibrary,
    GlobalStyles,
  })],
  tags: ['autodocs']
};

export default preview;
