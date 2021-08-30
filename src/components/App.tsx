import * as React from 'react';
import { useRef } from 'react';
import LandingPage from './LandingPage';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import { Controller } from 'react-scrollmagic';

import GlobalStyle from '../assets/globalStyle';

const AppDiv = styled.div`
  height: 100%;
`;

const App = () => {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <AppDiv>
      <Navbar
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <GlobalStyle />
      <Controller>
        <LandingPage projectsRef={projectsRef} />
        <Projects projectsRef={projectsRef} />
        <About aboutRef={aboutRef} />
        <Contact contactRef={contactRef} />
      </Controller>
    </AppDiv>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
