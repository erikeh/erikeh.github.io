import * as React from "react";
import { ReactElement } from "react";
import styled from "styled-components";
import Header from "./Header";
import { motion } from "framer-motion";

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

const ColoredHighlightedName = styled(motion.div)`
  color: red;
  width: fit-content;
  display: inline-flex;
`;

function LandingPage(): ReactElement {
  const nameVariant = {
    start: {},
    hover: {
      // scale: 1.1,
      skew: 5,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  return (
    <LandingPageContainer>
      <Header />
      <IntroContainer>
        {`My name is`}{" "}
        <ColoredHighlightedName
          variants={nameVariant}
          whileHover="hover"
          transition={{ duration: 1 }}
        >
          Erik Oh
        </ColoredHighlightedName>{" "}
        {`and I'm a full-stack software engineer`}
      </IntroContainer>
    </LandingPageContainer>
  );
}

export default LandingPage;
