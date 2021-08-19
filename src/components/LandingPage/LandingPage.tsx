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
  justify-content: center;
  width: 100%;
`;

const IntroContainer = styled(motion.h2)`
  color: white;
  border-radius: 7px;
  width: 760px;
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
  -webkit-transition: background-image 0.5s ease-in-out;
  transition: background-image 0.5s ease-in-out;
`;

function LandingPage(): ReactElement {
  const [pos, setPos] = useState([50, 0]);

  const handleMouseMove = (e: SyntheticEvent<Element, MouseEvent>) => {
    const { left: offsetLeft, top: offsetTop } =
      e.currentTarget.getBoundingClientRect();
    const { innerWidth: width, innerHeight: height } = window;
    const x = ((e.nativeEvent.clientX - offsetLeft) / width) * 400;
    const y = ((e.nativeEvent.clientY - offsetTop) / height) * 400;
    setPos([x, y]);
  };

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
          transition={{ duration: 0.8, staggerChildren: 0.3 }}
        >
          {`My name is`} {animateName(firstName)} {animateName(lastName)}{' '}
          {`and I'm a full-stack software engineer`}
        </IntroContainer>
      </AnimatePresence>
    </LandingPageContainer>
  );
}

export default LandingPage;
