import * as React from 'react';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  eVariant,
  rVariant,
  iVariant,
  kVariant,
  oVariant,
  hVariant,
  intro,
  introItem,
} from './variants';
import screen from '../../../media/mediaQueries';

type NameLetter = 'E' | 'r' | 'i' | 'k' | 'O' | 'h';

const IntroContainer = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  /* line-height: 7.7em; */
  width: 100%;
  ${screen.small`
    align-items: center;
  `}
`;

const OverFlowHider = styled(motion.div)`
  overflow: hidden;
`;

const IntroLine = styled(motion.h2)`
  overflow: visible;
  color: #f1faee;
  min-height: 0vw;
  font-size: clamp(1rem, 6.2vw, 5rem);
  font-weight: 600;
  cursor: default;
  ${screen.small`
    font-size: clamp(0.5rem, 9.5vw, 6rem);
    text-align: center;
  `}

  @media screen and (min-width: 1800px) {
    font-size: 6.7em;
  }
`;

const ColoredHighlightedCharacter = styled(motion.span)`
  display: inline;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-transition: background-image 0.2s ease-in-out;
  -moz-transition: background-image 0.2s ease-in-out;
  -o-transition: background-image 0.2s ease-in-out;
  transition: background-image 0.2s ease-in-out;
`;

function IntroText(): ReactElement {
  // store variants in obj to assign a variant to each character of my name
  const variants = {
    E: eVariant,
    r: rVariant,
    i: iVariant,
    k: kVariant,
    O: oVariant,
    h: hVariant,
  };

  const animateName = (name: string) =>
    (name.split('') as NameLetter[]).map((char: NameLetter, i) => (
      <ColoredHighlightedCharacter
        key={i}
        // animate={animationControls[char]}
        variants={variants[char]}
        initial="initial"
        whileHover="hover"
      >
        {char}
      </ColoredHighlightedCharacter>
    ));

  return (
    <IntroContainer variants={intro} initial="hidden" animate="show">
      <OverFlowHider
        animate={{ overflow: 'visible', transition: { delay: 0.61 } }}
      >
        <IntroLine variants={introItem}>
          {`My name is ` + ' '} {animateName('Erik')} {animateName('Oh')}
        </IntroLine>
      </OverFlowHider>
      <OverFlowHider>
        <IntroLine variants={introItem}>{`and I'm a full-stack`}</IntroLine>
      </OverFlowHider>
      <OverFlowHider
        animate={{ overflow: 'visible', transition: { delay: 0.89 } }}
      >
        <IntroLine variants={introItem}>{`software engineer`}</IntroLine>
      </OverFlowHider>
    </IntroContainer>
  );
}

export default IntroText;
