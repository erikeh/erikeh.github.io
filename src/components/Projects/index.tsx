import React, { ReactElement, Ref } from 'react';
import ProjectList from './ProjectList';
import { SubHeader } from '../shared/components';
import styled from 'styled-components';
import screen from '../../media/mediaQueries';

const ProjectsContainer = styled.div`
  width: 100%;
  height: 1500px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-bottom: 200px;
  /* border-top: 1px dotted white; */
  /* align-items: center; */
  ${screen.medium`
    height: 2200px;
  `}
`;

const SubHeaderContentAlignmentContainer = styled.div`
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
  /* align-items: center; */
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
        <SubHeader
          subHeader={'<Projects />'}
          color={'#423d88'}
          fontWeight={200}
        />
        <ProjectList />
      </SubHeaderContentAlignmentContainer>
    </ProjectsContainer>
  );
}

export default Projects;
