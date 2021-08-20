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
import screen from '../../media/mediaQueries';

const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  ${screen.small`
    justify-content: center;
    width: 80%;
  `}
`;

const IntroContainer = styled(motion.h2)`
  color: #f1faee;
  border-radius: 7px;
  flex: 0 1 760px;
  font-size: 5em;
  font-weight: 600;
  margin-left: 15%;
  margin-right: 15%;
  padding-top: 70px;
  cursor: default;
  ${screen.large`
    font-size: 60px;
    flex: 0 1 730px;
  `}
  ${screen.medium`
    font-size: 4em;
    flex: 0 1 470px;
    margin-left: 5px 0;
  `}
  ${screen.small`
    font-size: 1.7em;
    margin-left: 3%;
    margin-right: 3%;
    text-align: center;
  `}

  @media screen and (min-width: 1800px) {
    flex: 0 1 1000px;
    font-size: 6.7em;
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

function IntroText(): ReactElement {
  const firstName = `Erik`;
  const lastName = 'Oh';

  // store variants in obj to assign a variant to each character of my name
  const variants = {
    E: eVariant,
    r: rVariant,
    i: iVariant,
    k: kVariant,
    O: oVariant,
    h: hVariant,
  };

  // create imperative animation controls to account for mobile interactions
  const eControl = useAnimation();
  const rControl = useAnimation();
  const iControl = useAnimation();
  const kControl = useAnimation();
  const OControl = useAnimation();
  const hControl = useAnimation();

  const animationControls = {
    E: eControl,
    r: rControl,
    i: iControl,
    k: kControl,
    O: OControl,
    h: hControl,
  };

  const animateName = (name) =>
    name.split('').map((char, i) => (
      <ColoredHighlightedCharacter
        key={i}
        animate={animationControls[char]}
        variants={variants[char]}
        initial="initial"
        whileHover="hover"
        onTap={() => animationControls[char].start('hover')}
      >
        {char}
      </ColoredHighlightedCharacter>
    ));
  return (
    <>
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
          transition={{ duration: 0.8 }}
        >
          {`My name is`} {animateName(firstName)} {animateName(lastName)}{' '}
          {`and I'm a full-stack software engineer`}
        </IntroContainer>
      </HorizontalFlex>
    </>
  );
}

export default IntroText;
