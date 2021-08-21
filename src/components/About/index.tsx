import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SectionHeader, SubHeader, ImageContainer } from '../shared/styles';
import profilePic from '../../assets/img/profile.jpg';
import reactLogo from '../../assets/img/logos/react.svg';
import javascriptLogo from '../../assets/img/logos/javascript.svg';
import nodeLogo from '../../assets/img/logos/nodejs-icon.svg';
import typescriptLogo from '../../assets/img/logos/typescript-icon.svg';
import * as s from './styles';

interface AboutProps {}

function About({}: AboutProps): ReactElement {
  return (
    <s.AboutContainer>
      <s.AboutHeader></s.AboutHeader>
      <s.ProfileAndBio>
        <s.ProfilePictureContainer>
          <s.ProfilePicture src={profilePic} />
        </s.ProfilePictureContainer>
        <s.DetailsContainer>
          <s.AboutSubHeader subHeader={`Who's Erik?`} />
          <s.Bio>
            {`I'm a full-stack developer living in Los Angeles, LA. I'm passionate
            about great UX. But I'm equally passionate about writing organized,
            modularized and thoughtful code.`}
          </s.Bio>
          <s.AboutSubHeader subHeader={`Technologies`} />
          <s.Logos>
            <s.LogoImage img={reactLogo} />
            <s.LogoImage img={javascriptLogo} />
            <s.LogoImage img={nodeLogo} />
            <s.LogoImage img={typescriptLogo} />
          </s.Logos>
        </s.DetailsContainer>
      </s.ProfileAndBio>
    </s.AboutContainer>
  );
}

export default About;
