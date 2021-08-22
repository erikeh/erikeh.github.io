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
}

export const SubHeader = ({
  subHeader,
  color,
}: SubHeaderProps): React.ReactElement => {
  return (
    <AlignFlexStart>
      <SubHeaderContainer>
        <Text color={color}>{subHeader}</Text>
        <SubHeaderDecoration>-</SubHeaderDecoration>
      </SubHeaderContainer>
    </AlignFlexStart>
  );
};
