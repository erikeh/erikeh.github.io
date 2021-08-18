import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 18px;
  width: 100%;
  height: 50px;
`;

const LinksContainer = styled.div`
  font-weight: 200;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  padding-left: 20px;
`;

function Header({}: Props): ReactElement {
  return (
    <HeaderContainer>
      <LinksContainer>
        <Link href="https://github.com/erikeh">github</Link>
        <Link href="https://www.linkedin.com/in/yoon-hwan-erik-oh/">LinkedIn</Link>
      </LinksContainer>
    </HeaderContainer>
  );
}

export default Header;
