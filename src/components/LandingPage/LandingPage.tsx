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

const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 580px) {
    justify-content: center;
  }
`;

const IntroContainer = styled(motion.h2)`
  color: #f1faee;
  border-radius: 7px;
  flex: 0 1 760px;
  font-size: 5em;
  font-weight: 600;
  margin-left: 15%;
  padding-top: 70px;
  cursor: default;
  @media screen and (max-width: 870px) {
    font-size: 60px;
    flex: 0 1 730px;
  }
  @media screen and (max-width: 680px) {
    font-size: 45px;
    flex: 0 1 470px;
    margin-left: 5px 0;
    align-self: center;
  }
  @media screen and (max-width: 580px) {
    margin-left: 0;
    text-align: center;
  }
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
  flex: 1 1 auto;
  justify-content: flex-start;
  @media screen and (max-width: 580px) {
    justify-content: center;
  }
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
  @media screen and (max-width: 580px) {
    margin-left: 0;
    width: 40%;
  }
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
        <HorizontalFlex>
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
        </HorizontalFlex>
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
