import React, {
  Dispatch,
  ReactElement,
  RefObject,
  SetStateAction,
} from 'react';
import * as s from './styles';

interface Props {
  isOpenMobile: boolean;
  setIsOpenMobile: Dispatch<SetStateAction<boolean>>;
  projectsRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

function MobileNav({
  isOpenMobile,
  setIsOpenMobile,
  projectsRef,
  aboutRef,
  contactRef,
}: Props): ReactElement {
  const scrollToSectionMobile = (ref: RefObject<HTMLElement>) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsOpenMobile(false);
  };

  return (
    <s.MobileNavbarContainer isOpenMobile={isOpenMobile}>
      <s.DropDownItems>
        <s.DropDownItem
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsOpenMobile(false);
          }}
        >
          Home
        </s.DropDownItem>
        <s.DropDownItem onClick={() => scrollToSectionMobile(projectsRef)}>
          Projects
        </s.DropDownItem>
        <s.DropDownItem onClick={() => scrollToSectionMobile(aboutRef)}>
          About
        </s.DropDownItem>
        <s.DropDownItem onClick={() => scrollToSectionMobile(contactRef)}>
          Contact
        </s.DropDownItem>
      </s.DropDownItems>
    </s.MobileNavbarContainer>
  );
}

export default MobileNav;
