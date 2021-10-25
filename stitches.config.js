import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {},
      space: {
        1: 8,
        2: 16,
        3: 24,
        4: 36,
        5: 48,
      },
    },
    media: {},
    utils: {},
  });
