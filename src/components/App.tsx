import * as React from 'react';
import LandingPage from './LandingPage';
import About from './About';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import GlobalStyle from '../assets/globalStyle';

const AppDiv = styled.div`
  height: 100%;
`;

const App = () => {
  return (
    <AppDiv>
      <GlobalStyle />
      {/* <NavBarElement /> */}
      <LandingPage />
      <About />
      {/* <Projects /> */}
    </AppDiv>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
