import Color from 'color';

export const brand = '#F62F5E';
export const brandBlue = '#6EB2FB';
export const brandGreen = '#00B300';
export const brandYellow = '#EFFC90';
export const brandOrange = '#F1AD3D';
export const dark = '#2E2E2E';
export const white = '#FFFFFF';
export const grey = '#6C6C6C';
export const lightGrey = '#B4B4B4';
export const light = '#f7f7f7';
export const green = '#00FF00';
export const purple = '#652DC1';

export const darken = (color: string, value: number) => {
  return Color(color)
    .darken(value)
    .hex();
};

export const lighten = (color: string, value: number) => {
  return Color(color)
    .lighten(value)
    .hex();
};

export const fade = (color: string, value: number) => {
  return Color(color)
    .fade(value)
    .hex();
};
