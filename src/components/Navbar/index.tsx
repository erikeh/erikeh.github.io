import React, {
  useState,
  ReactElement,
  useEffect,
  RefObject,
  Dispatch,
  SetStateAction,
} from 'react';
import { useScrollDirection } from 'react-use-scroll-direction';
import { AnimatePresence } from 'framer-motion';
import MobileNav from './MobileNav';
import githubIcon from '../../assets/img/github-icon.svg';
import linkedInIcon from '../../assets/img/linkedin-icon.svg';
import * as s from './styles';

interface Props {
  projectsRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
  setNavbarAnimationComplete: Dispatch<SetStateAction<boolean>>;
}

function Navbar({
  projectsRef,
  aboutRef,
  contactRef,
  setNavbarAnimationComplete,
}: Props): ReactElement {
  const [isOpenDesktop, setIsOpenDesktop] = useState(true);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();

  const scrollToSectionDesktop = (ref: RefObject<HTMLElement>) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isScrollingUp) {
      setIsOpenDesktop(true);
    }
    if (isScrollingDown && !isOpenMobile) {
      setIsOpenDesktop(false);
    }
  }, [isScrollingDown, isScrollingUp]);

  const parentVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
      y: '-70%',
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        <s.NavbarContainer
          variants={parentVariant}
          initial="hidden"
          animate="show"
          onAnimationComplete={() => setNavbarAnimationComplete(true)}
          isOpenDesktop={isOpenDesktop}
          scrollingUp={isScrollingUp}
          scrollingDown={isScrollingDown}
        >
          <s.DesktopNavbarContainer>
            <s.NavbarItems>
              <s.NavbarItem
                variants={childVariant}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Home
              </s.NavbarItem>
              <s.NavbarItem
                variants={childVariant}
                onClick={() => scrollToSectionDesktop(projectsRef)}
              >
                Projects
              </s.NavbarItem>
              <s.NavbarItem
                variants={childVariant}
                onClick={() => scrollToSectionDesktop(aboutRef)}
              >
                About
              </s.NavbarItem>
              <s.NavbarItem
                variants={childVariant}
                onClick={() => scrollToSectionDesktop(contactRef)}
              >
                Contact
              </s.NavbarItem>
            </s.NavbarItems>

            <s.LinksContainer>
              <s.Link
                variants={childVariant}
                href="https://github.com/erikeh"
                target="_blank"
                aria-label="github"
              >
                <s.Icon src={githubIcon} alt="github icon" />
              </s.Link>
              <s.Link
                variants={childVariant}
                href="https://www.linkedin.com/in/yoon-hwan-erik-oh/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <s.Icon src={linkedInIcon} alt="linkedIn Icon" />
              </s.Link>
            </s.LinksContainer>
          </s.DesktopNavbarContainer>

          {/* hamburger menu visible at mobile breakpoint */}

          <s.HamburgerContainer
            onClick={() => setIsOpenMobile((prev) => !prev)}
            isOpenMobile={isOpenMobile}
          >
            <s.HamburgerBar />
            <s.HamburgerBar />
            <s.HamburgerBar />
          </s.HamburgerContainer>
        </s.NavbarContainer>
      </AnimatePresence>
      <MobileNav
        isOpenMobile={isOpenMobile}
        setIsOpenMobile={setIsOpenMobile}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
    </>
  );
}

export default Navbar;
