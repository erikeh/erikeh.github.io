import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import ReactFreezeFrame from 'react-freezeframe';
import { ImageWrapper } from '../shared/styles';
import { SubHeader } from '../shared/components';

interface Props {
  subHeader: string;
  img: string;
  description: string;
  technologies: string;
}

interface StyledProps {
  isHovering: boolean;
}

const ProjectListItemContainer = styled.div`
  /* width: clamp(20%, 100%, 70%); */
  width: 100%;
  max-width: 1000px;
  height: 500px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const ProjectDetailsContainer = styled.div`
  display: flex;
  flex: 0 1 55%;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ProjectDescription = styled.p<StyledProps>`
  font-family: 'IBM Plex Mono', monospace;
  height: fit-content;
  background-color: #005f73;
  margin-bottom: 20px;
  ${(props) =>
    props.isHovering ? 'margin-left: -25%;' : 'margin-right: -25%;'}
  z-index: 2;
  transition: margin 0.5s ease-out;
`;

const Technologies = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  height: 20%;
`;

const ProjectPreviewWrapper = styled(ImageWrapper)<StyledProps>`
  width: 100%;
  max-width: 500px;
  min-width: 40%;
  background-color: grey;
  border-radius: 55px;
  ${({ isHovering }) => !isHovering && 'filter: grayscale(100%) invert(75%);'}
  transition: 0.5s;
`;

const ProjectPreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

function ProjectListItem({
  subHeader,
  description,
  technologies,
  img,
}: Props): ReactElement {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <ProjectListItemContainer>
      <ProjectDetailsContainer>
        <SubHeader subHeader={subHeader} />
        <ProjectDescription isHovering={isHovering}>
          {description}
        </ProjectDescription>
        <Technologies>{technologies}</Technologies>
      </ProjectDetailsContainer>

      <ProjectPreviewWrapper
        isHovering={isHovering}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* <ProjectPreview src={img} /> */}
        <ReactFreezeFrame
          src={
            'https://github.com/erikeh/erikeh-demo-assets/blob/master/Group-foodie_demo_aug23.gif?raw=true'
          }
          onLoad={() => setIsLoading(false)}
        />
      </ProjectPreviewWrapper>
    </ProjectListItemContainer>
  );
}

export default ProjectListItem;
