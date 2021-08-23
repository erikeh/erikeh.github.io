import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProjectListItem from './ProjectListItem';
import notejs from '../../assets/projectDemo/notejs.gif';

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
    <ProjectListItemWrapper>
      <ProjectListItem
        subHeader={'Note-JS'}
        description={
          'A gravity based, geometric musical playground where collisions of various shapes create different notes and sounds based on the shape of the bodies. Heavily inspired by music making techniques of modular synthesis.'
        }
        technologies={'React NodeJS'}
        img={
          'https://github.com/erikeh/erikeh-demo-assets/blob/master/noteJS-demo_jul29.gif?raw=true'
        }
      />
    </ProjectListItemWrapper>
  );
}

export default ProjectList;
