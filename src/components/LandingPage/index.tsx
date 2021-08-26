import * as React from 'react';
import { ReactElement } from 'react';
import IntroText from './IntroText';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Scene } from 'react-scrollmagic';

import screen from '../../media/mediaQueries';

interface Props {
  reference: React.RefObject<HTMLDivElement>;
}

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
  padding-top: 10%;
  width: 60%;
  -webkit-transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  -moz-transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  -o-transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  &.hide {
    opacity: 0;
    transform: translateY(-30px);
  }
  ${screen.small`
    width: 90%;
  `}
`;

const ButtonWrapper = styled(motion.div)`
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
  border-radius: 4px;
  border: none;
  width: 170px;
  height: 45px;
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

function LandingPage({ reference }: Props): ReactElement {
  const handleScrollToRef = () => {
    reference.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LandingPageContainer>
      <AnimatePresence>
        <Scene classToggle="hide" triggerHook={0} offset={150}>
          <TextButtonContainer>
            <IntroText />
            <ButtonWrapper
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
                delay: 1.3,
              }}
            >
              <ShowWorkButton
                transition={{
                  duration: 0.15,
                }}
                whileHover={{
                  backgroundColor: '#0c8ea9',
                  transition: {
                    duration: 0.15,
                    type: 'tween',
                  },
                }}
                onClick={handleScrollToRef}
              >
                Show me your work
              </ShowWorkButton>
            </ButtonWrapper>
          </TextButtonContainer>
        </Scene>
      </AnimatePresence>
    </LandingPageContainer>
  );
}

export default LandingPage;
