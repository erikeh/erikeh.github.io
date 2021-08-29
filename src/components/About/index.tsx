import React, { ReactElement } from 'react';
import { SubHeader, SectionHeader } from '../shared/components';
import { Scene } from 'react-scrollmagic';
import profilePic from '../../assets/img/profile_300x400.jpg';
import logos from './logos';
import * as s from './styles';
import { css } from 'styled-components';

interface AboutProps {}

function About({}: AboutProps): ReactElement {
  const logoList = Object.entries(logos).map((logoPair, idx) => {
    const { src, alt, link } = logoPair[1];
    return (
      <s.LogoImage
        key={idx}
        img={src}
        alt={alt}
        link={link}
        whileHover={{ scale: 1.1 }}
      />
    );
  });

  return (
    <Scene classToggle="show" triggerHook={0.6} reverse={false}>
      <s.AboutContainer>
        <s.SubHeaderAlignmentWrapper>
          <SectionHeader text={'ABOUT'} fontWeight={200} />
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
              text={`Who's Erik?`}
              color={'#e7ecef'}
              fontWeight={200}
              textDecoration={'-'}
            />
            <s.Bio>
              {`I'm a full-stack developer living in Los Angeles, LA. I'm passionate
            about great UX. But I'm equally passionate about writing organized,
            modularized and thoughtful code.`}
            </s.Bio>
            <SubHeader
              text={`Technologies`}
              color={'#e7ecef'}
              fontWeight={200}
              textDecoration={'-'}
            />
            <s.Logos>{logoList}</s.Logos>
          </s.DetailsContainer>
        </s.ProfileAndBio>
      </s.AboutContainer>
    </Scene>
  );
}

export default About;
