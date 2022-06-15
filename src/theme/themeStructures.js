import { isContrastOkToWhite } from '../utils/colorCalculations'
import { systemColors, themePalette, themeTextColors } from './colors'
import { utilPalettes } from './utils'

export const currentStructure = {
  primary: '#ffffff',
  accent: '#43AAA0',
  accentDark: '#1C4843', // TODO get correct color from Frode
  black: '#000000',
  bg: {
    light: '#FFFFFF',
    accent: '#243782',
    primary: '#282B34',
    dialog: '#243782',
    gradient: 'linear-gradient(102.24deg, #143A84 10.28%, #0F2152 95.76%)'
  },
}



export const newStructure = { }

export const materialDesignStructureV2 = {
    primary: themePalette.darkBlue,
    secondray: {
        default: themePalette.mint.default,
        variant: themePalette.mint.lighter,
    },
    background: utilPalettes.gray[200],
    surface: utilPalettes.gray[50],
    error: systemColors.error,
    onPrimary: isContrastOkToWhite(themePalette.darkBlue) ? themeTextColors.light : themeTextColors.dark,
    onSecondary: isContrastOkToWhite(themePalette.mint.default) ? themeTextColors.light : themeTextColors.dark,
    onBackground: isContrastOkToWhite(utilPalettes.gray[200]) ? themeTextColors.light : themeTextColors.dark,
    onSurface: isContrastOkToWhite(utilPalettes.gray[50]) ? themeTextColors.light : themeTextColors.dark,
    onError: isContrastOkToWhite(systemColors.error) ? themeTextColors.light : themeTextColors.dark,
}