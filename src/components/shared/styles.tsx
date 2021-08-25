import * as React from 'react';

import styled, { keyframes } from 'styled-components';

interface TextProps {
  color: string;
  fontWeight: number;
}

// HTML elements
export const SectionHeader = styled.h2`
  display: flex;
  flex-flow: row nowrap;
  font-size: 60px;
  font-weight: 500;
  justify-content: flex-start;
`;

export const SubHeaderText = styled.h3`
  font-size: clamp(2em, 4vw, 4em);
  font-weight: 600;
  display: flex;
  flex-flow: row nowrap;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AlignFlexStart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

// extended
export const Text = styled(SubHeaderText)<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 600)};
`;

export const SubHeaderDecoration = styled(SubHeaderText)`
  color: #001219;
  display: flex;
  position: relative;
  top: -1vw;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  height: 40px;
`;
