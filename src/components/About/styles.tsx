import * as React from 'react';
import styled from 'styled-components';

import { SectionHeader, SubHeaderText, ImageContainer } from '../shared/styles';

// individual HTML elements
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 800px;
  background-color: #eef4d4;
`;

export const AboutHeader = styled(SectionHeader)`
  color: #001219;
  font-weight: 600;
  width: 80%;
  padding-top: 30px;
  padding-bottom: 40px;
`;

export const ProfileAndBio = styled.div`
  display: flex;
  flex: 0 1 auto;
  max-width: 1300px;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
`;

export const ProfilePictureContainer = styled(ImageContainer)`
  width: 300px;
`;

export const ProfilePicture = styled.img`
  width: 100%;
  border-radius: 100px;
`;

export const DetailsContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 50%;
`;

export const Bio = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  width: 75%;
  line-height: 18px;
  color: #001219;
  padding-bottom: 40px;
`;

export const Logos = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

// Sub Header elements
const AlignFlexStart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const SubHeaderContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Text = styled(SubHeaderText)`
  color: #001219;
`;

const SubHeaderDecoration = styled(SubHeaderText)`
  color: #001219;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: center;
  height: 40px;
`;

interface AboutSubHeaderProps {
  subHeader: string;
}

export const AboutSubHeader = ({
  subHeader,
}: AboutSubHeaderProps): React.ReactElement => {
  return (
    <AlignFlexStart>
      <SubHeaderContainer>
        <Text>{subHeader}</Text>
        <SubHeaderDecoration>-</SubHeaderDecoration>
      </SubHeaderContainer>
    </AlignFlexStart>
  );
};

// Logo Image Elements
const LogoContainer = styled(ImageContainer)`
  display: flex;
  width: 60px;
  margin-right: 20px;
`;

const TechStackLogo = styled.img`
  width: 100%;
`;

interface LogoImageProps {
  img: string;
}

export const LogoImage = ({ img }: LogoImageProps): React.ReactElement => {
  return (
    <LogoContainer>
      <TechStackLogo src={img} />
    </LogoContainer>
  );
};
