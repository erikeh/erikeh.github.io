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
}

export const SubHeader = ({
  subHeader,
  color,
  fontWeight,
}: SubHeaderProps): React.ReactElement => {
  return (
    <AlignFlexStart>
      <SubHeaderContainer>
        <Text color={color} fontWeight={fontWeight}>{subHeader}</Text>
        <SubHeaderDecoration>-</SubHeaderDecoration>
      </SubHeaderContainer>
    </AlignFlexStart>
  );
};
