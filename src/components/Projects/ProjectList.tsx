import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectListItem from './ProjectListItem';
import projects, { Project } from './projectInfo';

interface Props {}

const ProjectListItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  /* width: 100%; */
  flex: 0 1 100%;
`;

function ProjectList({}: Props): ReactElement {
  // const [demoGif, setDemoGif] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const rawGif = await axios.get(
  //       'https://github.com/erikeh/erikeh-demo-assets/blob/master/noteJS-demo_jul29.gif?raw=true',
  //       { responseType: 'arraybuffer' },
  //     );
  //     const base64Gif = Buffer.from(rawGif.data, 'binary').toString('base64');
  //     setDemoGif(base64Gif);
  //     setLoading(false);
  //   })();
  // }, []);

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
          />
        </ProjectListItemWrapper>
      ))}
    </>
  );
}

export default ProjectList;
