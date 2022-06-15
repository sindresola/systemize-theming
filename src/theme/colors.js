import { utilPalettes } from "./utils";

export const themePalette = {
  darkBlue: '#243782',
  antracite: '#282b34',
  mint:{
    lighter: '#A0D4C4',
    default: '#43AAA0',
    darker: '#006e6a',
  },
  orange: {
    lighter: '#FECD50',
    default: '#ECA935',
    darker: '#Ef7D00',
  },
  tangerine: {
    lighter: '#F39671',
    default: '#E94E24',
    darker: '#E42313',
  }
};

export const themeTextColors = {
  light: '#ffffff',
  dark: '#000000',
  primary: themePalette.mint.default
};

export const systemColors = {
  warning: utilPalettes.yellow[700],
  error: utilPalettes.red[900],
}
