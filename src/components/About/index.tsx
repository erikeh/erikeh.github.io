import React, { ReactElement } from 'react';
import { SubHeader } from '../shared/components';
import profilePic from '../../assets/img/profile_300x400.jpg';
import reactLogo from '../../assets/img/logos/react.svg';
import javascriptLogo from '../../assets/img/logos/javascript.svg';
import nodeLogo from '../../assets/img/logos/nodejs-icon.svg';
import typescriptLogo from '../../assets/img/logos/typescript-icon.svg';
import htmlLogo from '../../assets/img/logos/html-5.svg';
import cssLogo from '../../assets/img/logos/css-3.svg';
import reduxLogo from '../../assets/img/logos/redux.svg';
import * as s from './styles';

interface AboutProps {}

function About({}: AboutProps): ReactElement {
  return (
    <s.AboutContainer>
      <s.SubHeaderAlignmentWrapper>
        <SubHeader subHeader={'<About />'} color={'#423d88'} fontWeight={200} />
      </s.SubHeaderAlignmentWrapper>
      <s.ProfileAndBio>
        <s.ProfilePictureWrapper>
          <s.ProfilePicture
            src={profilePic}
            alt="Erik with dog in lap"
            width="300"
            height="400"
          />
        </s.ProfilePictureWrapper>
        <s.DetailsContainer>
          <SubHeader
            subHeader={`Who's Erik?`}
            color={'#000000'}
            fontWeight={600}
            textDecoration={'-'}
          />
          <s.Bio>
            {`I'm a full-stack developer living in Los Angeles, LA. I'm passionate
            about great UX. But I'm equally passionate about writing organized,
            modularized and thoughtful code.`}
          </s.Bio>
          <SubHeader
            subHeader={`Technologies`}
            color={'#000000'}
            fontWeight={600}
            textDecoration={'-'}
          />
          <s.Logos>
            <s.LogoImage img={reactLogo} alt={'React Logo'} />
            <s.LogoImage img={javascriptLogo} alt={'JavaScript Logo'} />
            <s.LogoImage img={nodeLogo} alt={'Node JS Logo'} />
            <s.LogoImage img={typescriptLogo} alt={'TypeScript Logo'} />
            <s.LogoImage img={htmlLogo} alt={'HTML5 Logo'} />
            <s.LogoImage img={cssLogo} alt={'CSS3 Logo'} />
            <s.LogoImage img={reduxLogo} alt={'Redux Logo'} />
          </s.Logos>
        </s.DetailsContainer>
      </s.ProfileAndBio>
    </s.AboutContainer>
  );
}

export default About;
