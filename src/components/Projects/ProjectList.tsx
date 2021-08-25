import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectListItem from './ProjectListItem';
import projects, { Project } from './projectInfo';

interface Props {}

const ProjectListItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 0 1 auto;
  margin-top: 50px;
  height: 500px;
`;

function ProjectList({}: Props): ReactElement {
  return (
    <>
      {(projects as Project[]).map((project, idx) => (
        <ProjectListItemWrapper key={idx}>
          <ProjectListItem
            key={idx}
            subHeader={project.name}
            description={project.description}
            technologies={project.technologies}
            img={project.img}
            link={project.link || ''}
            demo={project.demo}
          />
        </ProjectListItemWrapper>
      ))}
    </>
  );
}

export default ProjectList;
