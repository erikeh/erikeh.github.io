import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import screen from '../../media/mediaQueries';

interface ScrollProps {
  isOpenDesktop: boolean;
  scrollingUp: boolean;
  scrollingDown: boolean;
}

interface MobileScrollProps {
  isOpenMobile: boolean;
  setIsOpenMobile?: Dispatch<SetStateAction<boolean>>;
}

export const NavbarContainer = styled(motion.nav)<ScrollProps>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  background-color: #001219;
  box-shadow: -20px 0 35px -10px black;
  width: 100%;
  top: 0;
  position: sticky;
  transform: translateY(-100%);
  z-index: 15;
  ${({ isOpenDesktop }) => isOpenDesktop && 'transform: translateY(0);'}
  transition: 0.6s;
`;

export const DesktopNavbarContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 0 1 100%;
  ${screen.small`
    display: none;
  `}
`;

export const MobileNavbarContainer = styled.div<MobileScrollProps>`
  width: 100%;
  display: none;
  background-color: #0a2e3c;
  top: 40px;
  position: sticky;
  z-index: 10;
  transform: translateY(-125%);
  ${screen.small`
    display: flex;
  `}
  ${({ isOpenMobile }) => isOpenMobile && 'transform: translateY(0);'}
  transition: transform 0.6s;
`;

export const NavbarItems = styled.div`
  display: flex;
  flex: 0 1 100%;
  background-color: none;
  padding-left: 20px;
  transition: 0.6s;
`;

export const NavbarItem = styled(motion.button)`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  font-size: 1.1em;
  cursor: pointer;
  outline: inherit;
  padding: 15px;
  &:hover {
    background-color: #0c1c22;
  }
  transition: background-color 0.3s;
`;

export const DropDownItems = styled(NavbarItems)`
  flex-flow: column nowrap;
  display: none;
  padding-left: 0;
  ${screen.small`
    display: flex;`}
`;

export const DropDownItem = styled(NavbarItem)``;

export const LinksContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  flex: 0 1 200px;
  padding-right: 10px;
  ${screen.small`
    display: none;
  `}
`;

export const Link = styled(motion.a)`
  color: white;
  text-decoration: none;
  width: 30px;
  margin: 0 12px;
`;

export const Icon = styled.img`
  height: 30px;
  width: 100%;
`;

// hamburger menu styles
export const HamburgerContainer = styled.div<MobileScrollProps>`
  display: none;
  width: 70px;

  padding: 8px 10px;
  cursor: pointer;
  ${screen.small`
    display: block;
  `}
  ${({ isOpenMobile }) =>
    isOpenMobile &&
    `span {
    :nth-child(2) {
      opacity: 0;
    }
    :nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    :nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }`}
`;

export const HamburgerBar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #f8f5f5;
`;
