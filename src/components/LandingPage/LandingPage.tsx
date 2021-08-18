import * as React from "react";
import { ReactElement } from "react";
import styled from "styled-components";
import Header from "./Header";

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const IntroContainer = styled.h2`
  color: white;
  font-size: 80px;
  font-weight: 600;
  padding-right: 25%;
  padding-left: 10%;
  padding-top: 50px;
`;

const ColoredHighlightedName = styled.span`
  color: red;
  width: auto;
`;

function LandingPage(): ReactElement {
  return (
    <LandingPageContainer>
      <Header />
      <IntroContainer>
        {`My name is`} <ColoredHighlightedName>Erik Oh</ColoredHighlightedName>{" "}
        {`and I'm a full-stack software engineer`}
      </IntroContainer>
    </LandingPageContainer>
  );
}

export default LandingPage;
