import * as React from 'react';
import {
  AlignFlexStart,
  SubHeaderContainer,
  Text,
  SubHeaderDecoration,
} from './styles';

interface SubHeaderProps {
  subHeader: string;
  color?: string;
  fontWeight?: number;
  textDecoration?: string;
}

export const SubHeader = ({
  subHeader,
  color,
  fontWeight,
  textDecoration,
}: SubHeaderProps): React.ReactElement => {
  return (
    <AlignFlexStart>
      <SubHeaderContainer>
        <Text color={color} fontWeight={fontWeight}>
          {subHeader}
        </Text>
        <SubHeaderDecoration>{textDecoration}</SubHeaderDecoration>
      </SubHeaderContainer>
    </AlignFlexStart>
  );
};
