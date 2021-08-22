import React, { ReactElement } from 'react'
import ProjectList from './ProjectList';
import { SubHeader } from '../shared/components';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  width: 100%;
  height: 1400px;
`;

interface ProjectsProps {

}

function Projects({}: ProjectsProps): ReactElement {
  return (
    <ProjectsContainer>
      <SubHeader subHeader={'Projects'} color={'#f1faee'} />
      <ProjectList />
    </ProjectsContainer>
  )
}

export default Projects;
