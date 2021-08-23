import React, { ReactElement } from 'react'
import ProjectList from './ProjectList';
import { SubHeader } from '../shared/components';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  width: 100%;
  height: 1400px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  /* align-items: center; */
`;

const SubHeaderContentAlignmentContainer = styled.div`
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
`;

interface ProjectsProps {

}

function Projects({}: ProjectsProps): ReactElement {
  return (
    <ProjectsContainer>
      <SubHeaderContentAlignmentContainer>
        <SubHeader subHeader={'Projects'} color={'#f1faee'} />
        <ProjectList />
      </SubHeaderContentAlignmentContainer>
    </ProjectsContainer>
  )
}

export default Projects;
