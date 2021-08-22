import React, { ReactElement } from 'react';
import ProjectListItem from './ProjectListItem';
import reactLogo from '../../assets/img/logos/html-5.svg';

interface Props {

}

function ProjectList({}: Props): ReactElement {
  return (
    <div>
      <ProjectListItem
        subHeader={'GroupFoodie'}
        description={'This is the description lorem ipsum blah blah blah this was a great project but im mainly writing this so that i can fit up extra space to test out how the height of the container looks like'}
        technologies={'React NodeJS'}
        img={reactLogo}
      />
    </div>
  )
}

export default ProjectList;
