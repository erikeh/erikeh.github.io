import * as React from 'react';
import {
  AlignFlexStart,
  SubHeaderContainer,
  Text,
  SubHeaderDecoration,
} from './styles';

interface SubHeaderProps {
  subHeader: string;
}

export const SubHeader = ({
  subHeader,
}: SubHeaderProps): React.ReactElement => {
  return (
    <AlignFlexStart>
      <SubHeaderContainer>
        <Text>{subHeader}</Text>
        <SubHeaderDecoration>-</SubHeaderDecoration>
      </SubHeaderContainer>
    </AlignFlexStart>
  );
};
