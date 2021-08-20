import * as React from 'react';
import { ReactElement, useState, SyntheticEvent } from 'react';
import styled, { css } from 'styled-components';
import Header from './Header';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import {
  eVariant,
  rVariant,
  iVariant,
  kVariant,
  oVariant,
  hVariant,
} from './variants';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
`;

const IntroContainer = styled(motion.h2)`
  color: #f1faee;
  border-radius: 7px;
  max-width: 760px;

  font-size: 80px;
  font-weight: 600;
  margin-left: 10%;
  padding-top: 50px;
  cursor: default;
`;

const ColoredHighlightedCharacter = styled(motion.span)`
  background-size: 550%;
  display: inline-flex;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-transition: background-image 0.2s ease-in-out;
  transition: background-image 0.2s ease-in-out;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ShowWorkButton = styled(motion.button)`
  font-size: 15px;
  font-weight: 100;
  background-color: #005f73;
  color: #f1faee;
  border-radius: 40px;
  border: none;
  width: 170px;
  height: 45px;
  margin-left: 15%;
  margin-top: 50px;
  padding: 8px;
`;

function LandingPage(): ReactElement {
  // store variants in array to assign a variant to each character of my name
  const variants = [eVariant, rVariant, iVariant, kVariant, oVariant, hVariant];
  const firstName = `Erik`;
  const lastName = 'Oh';

  const animateName = (name) =>
    name.split('').map((char, i) => (
      <ColoredHighlightedCharacter
        key={i}
        variants={variants.shift()}
        initial="initial"
        whileHover="hover"
      >
        {char}
      </ColoredHighlightedCharacter>
    ));

  return (
    <LandingPageContainer>
      <Header />
      <AnimatePresence>
        <IntroContainer
          initial={{
            opacity: 0,
            y: 65,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8, staggerChildren: 1 }}
        >
          {`My name is`} {animateName(firstName)} {animateName(lastName)}{' '}
          {`and I'm a full-stack software engineer`}
        </IntroContainer>
        <ButtonContainer>
          <ShowWorkButton
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 2.5,
            }}
          >
            Show me your work
          </ShowWorkButton>
        </ButtonContainer>
      </AnimatePresence>
    </LandingPageContainer>
  );
}

export default LandingPage;
