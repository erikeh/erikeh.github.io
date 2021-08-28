import React, { ReactElement, useState } from 'react';
import axios from 'axios';
import { AnimatePresence, useAnimation } from 'framer-motion';
import { SectionHeader } from '../shared/components';
import * as s from './styles';



interface ContactProps {}

function Contact({}: ContactProps): ReactElement {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [confirm, setConfirm] = useState(false);

  const confirmationControl = useAnimation();

  const handleSubmitForm = async () => {
    try {
      await axios.post('/messageToEmail', {
        from: email,
        name,
        text: message,
      });
      setName('');
      setEmail('');
      setMessage('');
      showSubmitConfirmationText();
    } catch (err) {
      throw new Error(err);
    }
  };

  const showSubmitConfirmationText = async () => {
    setConfirm(true);
    await new Promise((r) => setTimeout(r, 7000));
    setConfirm(false);
  };

  return (
    <s.AlignCenterWrapper>
      <s.ContactContainerCenter>
        <SectionHeader text={'CONTACT'} color={'#f1faee'} fontWeight={200} />
        <s.CTAMessage>
          Have any questions, or would be interested in my services?
        </s.CTAMessage>
        <s.ContactForm>
          <s.ContactField
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div style={{ position: 'relative' }}>
          <s.NameValidation>Please enter name</s.NameValidation>
          </div>
          <s.ContactField
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <s.ContactMessageField
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </s.ContactForm>
        <AnimatePresence>
          {confirm && (
            <s.ConfirmationMessageWrapper>
              <s.SubmitConfirmationMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                Your message has been submitted. I will get back to you as soon
                as possible!
              </s.SubmitConfirmationMessage>
            </s.ConfirmationMessageWrapper>
          )}
        </AnimatePresence>
        <s.ContactButton
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
          onClick={handleSubmitForm}
        >
          Submit
        </s.ContactButton>
      </s.ContactContainerCenter>
    </s.AlignCenterWrapper>
  );
}

export default Contact;
