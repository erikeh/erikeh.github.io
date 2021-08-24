import * as React from 'react';
import { useRef } from 'react';
import LandingPage from './LandingPage';
import About from './About';
import Projects from './Projects';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import GlobalStyle from '../assets/globalStyle';

const AppDiv = styled.div`
  height: 100%;
`;

const App = () => {
  const projectsRef = useRef(null);

  return (
    <AppDiv>
      <GlobalStyle />
      {/* <NavBarElement /> */}
      <LandingPage reference={projectsRef}/>
      <Projects reference={projectsRef} />
      <About />
    </AppDiv>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
