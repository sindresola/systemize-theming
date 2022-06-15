import { systemColors, themePalette, themeTextColors } from './colors'
import { utilPalettes } from './utils';
import { currentStructure, materialDesignStructureV2, newStructure } from './themeStructures';

const theme = {
  colors: {
    ...themePalette,
    text: themeTextColors,
    ...systemColors,
    ...utilPalettes,
    ...currentStructure,
    // ...materialDesignStructureV2
  },
};

export default theme;
