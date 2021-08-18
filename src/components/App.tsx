import * as React from "react";
import LandingPage from './LandingPage/LandingPage';
import { hot } from "react-hot-loader";
import styled from 'styled-components';

import GlobalStyle from '../assets/globalStyle';

const AppDiv = styled.div`
  background-color: black;
`

const App = () => {
  return (
    <AppDiv>
      <GlobalStyle />
      {/* <NavBarElement /> */}
      <LandingPage />
      {/* <About /> */}
      {/* <Projects /> */}
    </AppDiv>
  );
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
