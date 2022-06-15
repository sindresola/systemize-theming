/* eslint-disable no-param-reassign */
// https://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes/24390910
import { head, map, take, takeLast, forEachObjIndexed } from 'ramda';

const convert8DigitHexToRgba = hex => {
  const channels = hex.slice(1).match(/.{1,2}/g);
  return channels.map((c, i) =>
    i > 2 ? parseFloat(parseInt((parseInt(c, 16) / 255) * 1000) / 1000) : parseInt(c, 16)
  );
};

const colorToRGBA = color => {
  if (typeof window === 'undefined') {
    return [0, 0, 0, 0];
  }

  const cvs = window.document.createElement('canvas');
  cvs.height = 1;
  cvs.width = 1;

  const ctx = cvs.getContext('2d');

  // Convert 8-digit hex codes to RGBA, taking opacity into account
  if (color?.includes('#') && color.length >= 8) {
    const rgba = convert8DigitHexToRgba(color);

    ctx.fillStyle = `rgb(${map(take(3, rgba))}`;
    ctx.globalAlpha = head(takeLast(1, rgba));
  } else {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, 1, 1);
  return ctx.getImageData(0, 0, 1, 1).data;
};

const hexToRGB = hex => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

// ############# Contrast calculation with YIQ #################
export const getContrast = color => {
  const [r, g, b] = colorToRGBA(color);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'dark' : 'light';
};

// ############# Contrast calculation with Luminance #################
export const isContrastOkToWhite = hexColor => contrastOnWhite(hexColor) > 4.5;

const contrastOnWhite = (color) => {
    var lumWhite = 1;
    var lumColor = calculateIlluminance(color);
    var brightest = Math.max(lumWhite, lumColor);
    var darkest = Math.min(lumWhite, lumColor);
    return (brightest + 0.05)
         / (darkest + 0.05);
}

const calculateIlluminance = color => {
  const [r, g, b] = colorToRGBA(color);
//   const {r, g, b} = hexToRGB(color);
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

const palette = {
  blue: '#243782',
  antracite: '#282b34',
  mint: '#43AAA0',
  mint2: '#A0D4C4',
  white: '#ffffff',
  black: '#000000',
};

const themeTextColors = {
  primaryDark: palette.black,
  primaryLight: palette.white,
};

const getThemeTextColor = color =>
  getContrast(color) === 'dark' ? themeTextColors.primaryDark : themeTextColors.primaryLight;

const colors = {
  primary: palette.blue,
  secondary: palette.mint,
  secondaryVariant: palette.mint2, // 👈 hmm
  bg: {
    primary: palette.antracite,
    secondary: palette.white,
  },
};

const textColors = {
  onPrimary: getThemeTextColor(palette.blue),
  onSecondary: getThemeTextColor(palette.mint),
  onSecondaryVariant: getThemeTextColor(palette.mint2),
  onBgPrimary: getThemeTextColor(palette.antracite),
  onBgSecondary: getThemeTextColor(palette.white),
  onBlack: getThemeTextColor('#000000'),
  onWhite: getThemeTextColor('#ffffff'),
};

const printKeyConcatValue = (value, key) => console.log(`${[key]}:${value}`);

forEachObjIndexed(printKeyConcatValue, textColors);
