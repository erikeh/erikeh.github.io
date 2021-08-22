import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ImageWrapper } from '../shared/styles';
import { SubHeader } from '../shared/components';

interface Props {
  subHeader: string;
  img: string;
  description: string;
  technologies: string;
}

const ProjectListItemContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
  width: 35%;
`;

const ProjectDescription = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  height: fit-content;
  background-color: #005F73;
  margin-bottom: 20px;
  margin-right: -15%;
  z-index: 2;
`;

const Technologies = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  height: 20%;
`;

const ProjectPreviewWrapper = styled(ImageWrapper)`
  height: 60%;
  width: 45%;
  background-color: grey;
  border-radius: 55px;
`;

const ProjectPreview = styled.img`
  height: 100%;
`;

function ProjectListItem({
  subHeader,
  description,
  technologies,
  img,
}: Props): ReactElement {
  return (
    <ProjectListItemContainer>

      <ProjectDetailsContainer>
        <SubHeader subHeader={subHeader} />
        <ProjectDescription>{description}</ProjectDescription>
        <Technologies>{technologies}</Technologies>
      </ProjectDetailsContainer>

      <ProjectPreviewWrapper>
        <ProjectPreview src={img} />
      </ProjectPreviewWrapper>

    </ProjectListItemContainer>
  );
}

export default ProjectListItem;
