import * as React from 'react';
import { ReactElement, useState, SyntheticEvent } from 'react';
import styled, { css } from 'styled-components';
import Header from './Header';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import bgimg from '../../assets/img/swirl.jpg';
import bgimg2 from '../../assets/img/terrazzo.jpg';
import redbg from '../../assets/img/red.jpeg';

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

const ColoredHighlightedName = styled(motion.div)`
  background-size: 150%;
  width: fit-content;
  display: inline-flex;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-transition: background-image 1s ease-in-out;
  transition: background-image 1s ease-in-out;
`;

function LandingPage(): ReactElement {
  const [pos, setPos] = useState([50, 0]);

  const handleMouseMove = (e: SyntheticEvent<Element, MouseEvent>) => {
    const { left: offsetLeft, top: offsetTop } =
      e.currentTarget.getBoundingClientRect();
    const { innerWidth: width, innerHeight: height } = window;
    const x = ((e.nativeEvent.clientX - offsetLeft) / width) * 200;
    const y = ((e.nativeEvent.clientY - offsetTop) / height) * 200;
    setPos([x, y]);
  };

  const nameVariant = {
    start: {},
    initial: {
      backgroundImage: `url(${redbg})`,
      transition: {
        duration: 0.8,
      }
    },
    hover: {
      backgroundImage: `url(${bgimg2})`,
      backgroundPosition: `${pos[0]}% ${pos[1]}%`,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <LandingPageContainer>
      <Header />
      <AnimatePresence>
        <IntroContainer
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {`My name is`}{' '}
          <ColoredHighlightedName
            variants={nameVariant}
            initial="initial"
            whileHover="hover"
            // transition={{ duration: 1 }}
            onMouseMove={handleMouseMove}
            position={pos}
          >
            Erik Oh
          </ColoredHighlightedName>{' '}
          {`and I'm a full-stack software engineer`}
        </IntroContainer>
      </AnimatePresence>
    </LandingPageContainer>
  );
}

export default LandingPage;
