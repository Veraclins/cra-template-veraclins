import { dark, brand, white, grey, light } from "styles/colors";

export const baseSize = 16;

export const pxToRem = (px: number): string => `${px / baseSize}rem`;

export const pxToVw = (px: number, width: number): string =>
  `${(100 * px) / width}vw`;

export const themes = {
  default: {
    background: brand,
    color: white,
    logoColor: white,
    activeNavColor: dark,
    badgeColor: brand,
    badgeBackground: white,
    topNavBackground: white,
    searchBackground: light
  },
  dark: {
    background: dark,
    color: white,
    logoColor: brand,
    activeNavColor: brand,
    badgeColor: white,
    badgeBackground: brand,
    topNavBackground: light,
    searchBackground: grey
  },
  white: {
    background: white,
    color: dark,
    logoColor: brand,
    activeNavColor: brand,
    badgeColor: white,
    badgeBackground: brand,
    topNavBackground: light,
    searchBackground: light
  }
};
