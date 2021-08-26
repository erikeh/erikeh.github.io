import * as React from 'react';
import { useRef } from 'react';
import LandingPage from './LandingPage';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Header from './Header';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import { Controller } from 'react-scrollmagic';

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
      <Controller>
        <Header />
        <LandingPage reference={projectsRef} />
        <Projects reference={projectsRef} />
        <About />
        <Contact />
      </Controller>
    </AppDiv>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
