import * as React from 'react';
import styled from 'styled-components/native';
import {
  space,
  layout,
  flexbox,
  typography,
  color,
  textStyle,
  position,
} from 'styled-system';

export const Text = styled.Text`
  ${textStyle}
  ${space}
  ${layout}
  ${flexbox}
  ${typography}
  ${color}
  ${position}
`;

export const Typography = ({children, ...rest}) => {
  return <Text {...rest}>{children}</Text>;
};
