import React, { ReactElement } from 'react';
import styled from 'styled-components';
import githubIcon from '../../assets/img/github-icon.svg';
import linkedInIcon from '../../assets/img/linkedin-icon.svg';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 18px;
  width: 100%;
  height: 60px;
`;

const LinksContainer = styled.div`
  font-weight: 200;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  width: 30px;
  padding-left: 20px;
`;

const Icon = styled.img`
  height: 100%;
`;

function Header(): ReactElement {
  return (
    <HeaderContainer>
      <LinksContainer>
        <Link href="https://github.com/erikeh" aria-label="github">
          <Icon src={githubIcon} alt="github icon" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/yoon-hwan-erik-oh/"
          aria-label="LinkedIn"
        >
          <Icon src={linkedInIcon} alt="linkedIn Icon" />
        </Link>
      </LinksContainer>
    </HeaderContainer>
  );
}

export default Header;
