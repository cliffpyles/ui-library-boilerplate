// src/utils/buildTheme.test.ts
import { describe, it, expect } from "vitest";
import { buildTheme } from './buildTheme';

describe('buildTheme', () => {
    it('should replace single level keys with corresponding values', () => {
        const theme = {
            global: {
                background: 'rebeccapurple',
            },
            box: {
                background: '$global.background',
            }
        };
        expect(buildTheme(theme)).toMatchInlineSnapshot(`
          {
            "box": {
              "background": "rebeccapurple",
            },
            "global": {
              "background": "rebeccapurple",
            },
          }
        `);
    });

    it('should replace nested keys with corresponding values', () => {
        const theme = {
            global: {
                colors: {
                    primary: 'rebeccapurple',
                    secondary: 'orange',
                },
            },
            box: {
                background: '$global.colors.primary',
            }
        };



        expect(buildTheme(theme)).toMatchInlineSnapshot(`
          {
            "box": {
              "background": "rebeccapurple",
            },
            "global": {
              "colors": {
                "primary": "rebeccapurple",
                "secondary": "orange",
              },
            },
          }
        `);
    });

    it('should handle missing keys gracefully', () => {
        const theme = {
            global: {
                colors: {
                    primary: '#000',
                },
                background: '$global.colors.secondary',
            },
        };

        const expected = {
            global: {
                colors: {
                    primary: '#000',
                },
                background: undefined,
            },
        };

        expect(buildTheme(theme)).toEqual(expected);
    });

    it('should not modify non-string values', () => {
        const theme = {
            global: {
                spacing: {
                    small: '8px',
                    medium: '16px',
                },
                padding: {
                    default: '$global.spacing.small',
                    custom: 10,
                },
            },
        };

        const expected = {
            global: {
                spacing: {
                    small: '8px',
                    medium: '16px',
                },
                padding: {
                    default: '8px',
                    custom: 10,
                },
            },
        };

        expect(buildTheme(theme)).toEqual(expected);
    });


    it('should process the entire theme object correctly', () => {
        const theme = {
            global: {
                colors: {
                    primary: '#000',
                    secondary: '#fff',
                },
                font: {
                    family: 'Arial',
                    size: '16px',
                    weight: '400',
                },
                spacing: {
                    small: '8px',
                    medium: '16px',
                },
                border: {
                    color: '$global.colors.primary',
                    width: '1px',
                    style: 'solid',
                },
                background: '$global.colors.secondary',
            },
            box: {
                background: '$global.background',
                border: {
                    color: '$global.border.color',
                    width: '$global.border.width',
                    style: '$global.border.style',
                },
                padding: {
                    default: '$global.spacing.small',
                },
            },
        };

        expect(buildTheme(theme)).toMatchInlineSnapshot(`
          {
            "box": {
              "background": "$global.colors.secondary",
              "border": {
                "color": "$global.colors.primary",
                "style": "solid",
                "width": "1px",
              },
              "padding": {
                "default": "8px",
              },
            },
            "global": {
              "background": "#fff",
              "border": {
                "color": "#000",
                "style": "solid",
                "width": "1px",
              },
              "colors": {
                "primary": "#000",
                "secondary": "#fff",
              },
              "font": {
                "family": "Arial",
                "size": "16px",
                "weight": "400",
              },
              "spacing": {
                "medium": "16px",
                "small": "8px",
              },
            },
          }
        `);
    });
});
