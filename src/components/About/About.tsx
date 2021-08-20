import React, { ReactElement } from 'react';
import styled from 'styled-components';
import profilePic from '../../assets/img/profile.jpg';

interface Props {}

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
`;

const Header = styled.h2`
  display: flex;
  font-size: 60px;
  font-weight: 500;
  justify-content: flex-start;
  padding-left: 20%;
`;

const ProfileAndBio = styled.div`
  display: flex;
  flex: 0 1 auto;
  /* width: 900px; */
  /* width: 800px; */
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* width: 600px; */
`;

const ProfilePictureContainer = styled.div`
  width: 300px;
  justify-content: space-between;
  margin-left: 15%;
  margin-top: 50px;
`;

const ProfilePicture = styled.img`
  width: 100%;
  border-radius: 100px;
`;

const Bio = styled.p`

`

function About({}: Props): ReactElement {
  return (
    <AboutContainer>
      <Header>About</Header>

      <ProfileAndBio>

        <ProfilePictureContainer>
          <ProfilePicture src={profilePic} />
        </ProfilePictureContainer>
        <Bio>
          lorem ipsum blah blah erik did this, i love that, what a great life and we are all friends.
        </Bio>

      </ProfileAndBio>

    </AboutContainer>
  );
}

export default About;
