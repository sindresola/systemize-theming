import { is } from 'ramda';
import styled from 'styled-components';
import Box from './Box';
import ColorItem from './ColorItem';
import firstToUpper from '../utils/firstToUpper'

const PaletteContainer = styled(Box)`
  margin: 1rem 0;
`;

const SwatchContainer = styled(Box)`
  display: flex;
  border-radius: 0.5rem;
  height: 4rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23),
    inset 0px -1px 0px rgb(0 0 0 / 20%), inset 0px 1px 0px 0px rgb(255 255 255 / 10%);
  overflow: auto;
`;

const ColorPalette = ({ palette, title }) => {
  const nested = Object.keys(palette).length > 1;
  const colors = Object.keys(palette).map(color => (
    <ColorItem
      key={color}
      title={color}
      color={palette[color]}
      nestedTitle={nested ? title : undefined}
    />
  ));
  return (
    <PaletteContainer>
      <h3>{firstToUpper(title)}</h3>
      <p style={{color: 'darkgray'}}>colors.{title}</p>
      <SwatchContainer>{colors}</SwatchContainer>
    </PaletteContainer>
  );
};

export default ColorPalette;
