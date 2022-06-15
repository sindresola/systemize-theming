import styled from 'styled-components';
import Box from './Box';
import { isContrastOkToWhite } from '../utils/colorCalculations';

const ColorItemContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ColorItem = ({ key, title, color, nestedTitle }) => {
  const textColor = isContrastOkToWhite(color) ? 'text.light' : 'text.dark';

  return nestedTitle ? (
    <ColorItemContainer bg={`${nestedTitle}.${title}`} color={textColor}>
      {title}
    </ColorItemContainer>
  ) : (
    <ColorItemContainer bg={title} color={textColor}>
      {title}
    </ColorItemContainer>
  );
};

export default ColorItem;
