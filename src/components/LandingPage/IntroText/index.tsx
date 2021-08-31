import * as React from 'react';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
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
import redbg from '../../../assets/img/textBackground/red.jpeg';


type NameLetter = 'E' | 'r' | 'i' | 'k' | 'O' | 'h';

const IntroContainer = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  ${screen.small`
    align-items: center;
  `}
`;

const OverFlowHider = styled.div`
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
  /* background-size: 550%; */
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

  const handleMouseEnter = (char: NameLetter) => {
    // animationControls[char].stop();
    animationControls[char].start('hover');
  };

  const handleMouseLeave = (char: NameLetter) => {
    // animationControls[char].stop();
    animationControls[char].start('initial');
  };

  const animateName = (name: string) =>
    (name.split('') as NameLetter[]).map((char: NameLetter, i) => (
      <ColoredHighlightedCharacter
        key={i}
        animate={animationControls[char]}
        variants={variants[char]}
        initial="initial"
        whileHover="hover"
        // onMouseEnter={() => handleMouseEnter(char)}
        // onMouseLeave={() => handleMouseLeave(char)}
        // onTap={() => animationControls[char].start('tap')}
      >
        {char}
      </ColoredHighlightedCharacter>
    ));

  return (
    <IntroContainer variants={intro} initial="hidden" animate="show">
      <OverFlowHider>
        <IntroLine variants={introItem}>
          {`My name is ` + ' '} {animateName('Erik')} {animateName('Oh')}
        </IntroLine>
      </OverFlowHider>
      <OverFlowHider>
        <IntroLine variants={introItem}>{`and I'm a full-stack`}</IntroLine>
      </OverFlowHider>
      <OverFlowHider>
        <IntroLine variants={introItem}>{`software engineer`}</IntroLine>
      </OverFlowHider>
    </IntroContainer>
  );
}

export default IntroText;
