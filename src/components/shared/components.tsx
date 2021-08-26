import * as React from 'react';
import { Scene } from 'react-scrollmagic';
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
      <Scene classToggle="show" triggerHook={0.8} reverse={false}>
        <SubHeaderContainer>
          <Text color={color} fontWeight={fontWeight}>
            {subHeader}
          </Text>
          <SubHeaderDecoration>{textDecoration}</SubHeaderDecoration>
        </SubHeaderContainer>
      </Scene>
    </AlignFlexStart>
  );
};
