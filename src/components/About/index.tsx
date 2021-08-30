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
              textDecoration={'------------'}
            />
            <s.Bio>
              {`I'm a full-stack developer living in Los Angeles, CA. I'm passionate
            about technology and UX, but I'm equally passionate about writing organized,
            modularized and thoughtful code.`}
            </s.Bio>
            <s.Bio>
              {`I've worked in agencies with non-stop deadlines, startups with ever changing workflows, and recently had my own startup where I learned how to communicate efficiently across technical and non-technical team members. Now, I would love nothing more than to offer my experiences and skills as a developer to help solve problems individually, and as a team.`}
            </s.Bio>
            <s.Bio>
              {`In my free time, I take my dog to the park, go surfing early in the morning, or create alien soundscapes with my modular synth!`}
            </s.Bio>
          </s.DetailsContainer>
        </s.ProfileAndBio>
        <SubHeader
          text={`Core Technologies`}
          color={'#e7ecef'}
          fontWeight={200}
        />
        <s.Logos>{logoList}</s.Logos>
      </s.AboutContainer>
    </Scene>
  );
}

export default About;
