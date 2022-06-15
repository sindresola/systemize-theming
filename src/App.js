import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { systemColors, themePalette, themeTextColors } from './theme/colors'
import { utilPalettes } from './theme/utils'
import { is } from 'ramda';
import ColorPalette from './Components/ColorPalette';
import Box from './Components/Box';
import { currentStructure, materialDesignStructureV2, newStructure } from './theme/themeStructures';

const PalettesContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  height: 100%;
  width: 100%;
`;

const createPalletes = swatches =>
  Object.keys(swatches).map(color =>
    is(Object, swatches[color]) ? (
      <ColorPalette palette={swatches[color]} title={color} />
    ) : (
      <ColorPalette palette={{ [color]: swatches[color] }} title={color} />
    )
  );

const App = props => {
  const swatchesCollection = [
    { name: 'Theme Colors', swatches: {...themePalette, text: themeTextColors} },
    { name: 'Current Structure', swatches: {...currentStructure} },
    // { name: 'New Structure', swatches: {...newStructure} },
    // { name: 'Material Design Structure', swatches: {...materialDesignStructureV2} },
    { name: 'System Colors', swatches: systemColors },
    { name: 'Predefined Utility Colors', swatches: utilPalettes },
    // { name: 'All colors', swatches: theme.colors },
  ];
  return (
    <ThemeProvider theme={theme}>
      <PalettesContainer>
        {swatchesCollection.map(({ name, swatches }) => (
          <div style={{width: 'clamp(30%, 50rem, 90%)'}}>
            <h2>{name}</h2> {createPalletes(swatches)}
          </div>
        ))}
      </PalettesContainer>
    </ThemeProvider>
  );
};

export default App;
