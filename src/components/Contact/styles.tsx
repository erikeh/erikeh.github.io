import styled from 'styled-components';
import screen from '../../media/mediaQueries';
import { motion  } from 'framer-motion';

export const AlignCenterWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  padding-bottom: 8vh;
`;

export const ContactContainerCenter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 60%;
  border-top: 0.5px solid rgb(51, 51, 51);
  padding-top: 9vh;
  align-items: center;
  min-height: 500px;
  flex: 0 1 600px;
  opacity: 0;
  transform: translateY(25px);
  -webkit-transition: 0.7s;
  -moz-transition: 0.7s;
  -o-transition: 0.7s;
  transition: 0.7s;
  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CTAMessage = styled.h3`
  color: #f1faee;
  padding-bottom: 1.4em;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  /* width: 30em; */
`;

export const ContactField = styled.input`
  background-color: #21212c;
  color: #f1faee;
  border: none;
  height: 2.5em;
  margin-bottom: 3px;
  padding: 1.4em 1em;
`;

export const ContactMessageField = styled.textarea`
  background-color: #21212c;
  color: #f1faee;
  border: none;
  margin: 0;
  width: 40em;
  height: 10em;
  padding: 1em 1em;
`;

export const ConfirmationMessageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #21212c;
`;

export const SubmitConfirmationMessage = styled(motion.p)`
  position: absolute;
  padding-top: 18px;
  font-size: 0.9rem;
`;

export const ContactButton = styled(motion.button)`
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

// validation components

export const NameValidation = styled.span`
  position: absolute;
  top: 1px;
  background-color: grey;
  width: 150px;
  height: 30px;
  border: 40px;
`;