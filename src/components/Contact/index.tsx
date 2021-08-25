import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import screen from '../../media/mediaQueries';

const ContactButton = styled(motion.button)`
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

interface ContactProps {

}

function Contact({}: ContactProps): ReactElement {
  return (
    <div>
      <ContactButton>Contact me</ContactButton>
    </div>
  )
}

export default Contact;
