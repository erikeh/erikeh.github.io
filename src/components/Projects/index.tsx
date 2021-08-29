import React, { ReactElement, Ref } from 'react';
import ProjectList from './ProjectList';
import { SubHeader, SectionHeader } from '../shared/components';
import styled from 'styled-components';
import screen from '../../media/mediaQueries';

const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  height: 1500px;
  margin-bottom: 200px;
  ${screen.medium`
    height: 2200px;
  `}
`;

const SubHeaderContentAlignmentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 60%;
  /* border-top: 0.5px solid rgb(51, 51, 51); */
  padding-top: 9vh;
  ${screen.extraLarge`
    width: 80%;
  `}
`;

interface ProjectsProps {
  reference: Ref<HTMLDivElement>;
}

function Projects({ reference }: ProjectsProps): ReactElement {
  return (
    <ProjectsContainer ref={reference}>
      <SubHeaderContentAlignmentContainer>
        <SectionHeader text={'PROJECTS'} fontWeight={200} />
        <ProjectList />
      </SubHeaderContentAlignmentContainer>
    </ProjectsContainer>
  );
}

export default Projects;
