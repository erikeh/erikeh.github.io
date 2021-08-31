import React, { useState, ReactElement, useEffect, RefObject } from 'react';
import styled from 'styled-components';
import { useScrollDirection } from 'react-use-scroll-direction';
import githubIcon from '../../assets/img/github-icon.svg';
import linkedInIcon from '../../assets/img/linkedin-icon.svg';

interface Props {
  projectsRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

interface ScrollProps {
  scrollingUp: boolean;
  scrollingDown: boolean;
}

const NavbarContainer = styled.nav<ScrollProps>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: #001219;
  box-shadow: -20px 0 35px -10px black;
  width: 100%;
  position: absolute;
  top: 0;
  position: sticky;
  z-index: 15;
  &.hide {
    transform: translateY(-100%);
  }
  &.show {
    transform: translateY(0);
  }
  transition: 0.6s;
  /* border-bottom: 1px solid white; */
`;

const NavbarItems = styled.div`
  display: flex;
  flex: 0 1 100%;
  background-color: none;
  padding-left: 20px;
`;

const NavbarItem = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 15px;
  &:hover {
    background-color: #0c1c22;
  }
  transition: background-color 0.3s;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  /* background-color: grey; */
  flex: 0 1 200px;
  padding-right: 10px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  width: 30px;
  margin: 0 12px;
  &:hover {
    background-color: #0c1c22;
  }
`;

const Icon = styled.img`
  height: 30px;
  width: 100%;
  /* margin-right: 20px; */
`;

function Navbar({ projectsRef, aboutRef, contactRef }: Props): ReactElement {
  const [className, setclassName] = useState('');
  const { isScrollingUp, isScrollingDown } = useScrollDirection();

  useEffect(() => {
    if (isScrollingUp) {
      setclassName('show');
    }
    if (isScrollingDown) {
      setclassName('hide');
    }
  }, [isScrollingDown, isScrollingUp]);

  return (
    <NavbarContainer
      className={className}
      scrollingUp={isScrollingUp}
      scrollingDown={isScrollingDown}
    >
      <NavbarItems>
        <NavbarItem
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Home
        </NavbarItem>
        <NavbarItem
          onClick={() =>
            projectsRef.current.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Projects
        </NavbarItem>
        <NavbarItem
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: 'smooth' })
          }
        >
          About
        </NavbarItem>
        <NavbarItem
          onClick={() =>
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Contact
        </NavbarItem>
      </NavbarItems>
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
    </NavbarContainer>
  );
}

export default Navbar;
