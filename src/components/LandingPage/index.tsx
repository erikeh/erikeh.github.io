import * as React from 'react';
import { ReactElement } from 'react';
import IntroText from './IntroText';
import styled from 'styled-components';
import Header from './Header';
import { motion, AnimatePresence } from 'framer-motion';

import screen from '../../media/mediaQueries';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const TextButtonContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 80%;
  ${screen.small`
    width: 90%;
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 1 auto;
  width: 100%;
  justify-content: flex-start;
  ${screen.small`
    justify-content: center;
  `}
`;

const ShowWorkButton = styled(motion.button)`
  cursor: pointer;
  font-size: 15px;
  font-weight: 100;
  background-color: #005f73;
  color: #f1faee;
  border-radius: 40px;
  border: none;
  width: 170px;
  height: 45px;
  /* margin-left: 15%; */
  margin-top: 50px;
  padding: 8px;
  ${screen.small`
    margin-left: 0;
    width: 40%;
    font-size: 0.8em;
    height: 38px;
    margin-top: 40px;
  `}
`;

function LandingPage(): ReactElement {
  return (
    <LandingPageContainer>
      <Header />
      <AnimatePresence>
        <TextButtonContainer>
          <IntroText />
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
                delay: 0.2,
              }}
            >
              Show me your work
            </ShowWorkButton>
          </ButtonContainer>
        </TextButtonContainer>
      </AnimatePresence>
    </LandingPageContainer>
  );
}

export default LandingPage;
