import * as React from 'react';
import styled from 'styled-components';
import screen from '../../media/mediaQueries';
import { SectionHeader, SubHeaderText, ImageWrapper } from '../shared/styles';
import { SubHeader } from '../shared/components';

// individual HTML elements
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 800px;
  padding-top: 36px;
  background-color: #eef4d4;
  ${screen.medium`
    height: 1100px;
  `}
`;

export const SubHeaderAlignmentWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
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
  width: 60%;
  max-width: 900px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  ${screen.extraLarge`
    width: 80%;
  `}
  ${screen.medium`
    flex-flow: column nowrap;
    align-items: center;
    width: 85%;
  `}
`;

export const ProfilePictureWrapper = styled(ImageWrapper)`
  flex: 0 1 300px;
  align-items: center;
  ${screen.medium`
    max-width: 300px;
    padding-bottom: 30px;
  `}
`;

export const ProfilePicture = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 7px 5px 25px -8px black;
`;

export const DetailsContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 55px;
  padding-right: -55px;
  width: 50%;
  ${screen.medium`
    width: 100%;
    align-items: center;
    padding: 0;
  `}
`;

export const Bio = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  width: 100%;
  line-height: 18px;
  color: #001219;
  padding-bottom: 40px;
  ${screen.medium`
    text-align: center;
  `}
`;

export const Logos = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

// Logo Image Elements
const LogoContainer = styled(ImageWrapper)`
  display: flex;
  width: 4vw;
  min-width: 2.5rem;
  max-width: 4rem;
  margin-right: 20px;
`;

const TechStackLogo = styled.img`
  width: 100%;
  height: auto;
`;

interface LogoImageProps {
  img: string;
  alt: string;
}

export const LogoImage = ({ img, alt }: LogoImageProps): React.ReactElement => {
  return (
    <LogoContainer>
      <TechStackLogo src={img} alt={alt} />
    </LogoContainer>
  );
};
