import React, { ReactElement, useState, useRef } from 'react';
import styled from 'styled-components';
import ReactFreezeFrame from 'react-freezeframe';
import { ImageWrapper } from '../shared/styles';
import { SubHeader } from '../shared/components';
import screen from '../../media/mediaQueries';

interface Props {
  subHeader: string;
  img: string;
  description: string;
  technologies: string[];
}

interface StyledProps {
  isHovering: boolean;
  isActiveMobile: boolean;
}

const ProjectListItemContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: fit-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  ${screen.medium`
    flex-flow: column nowrap;
    align-items: center;
  `}
`;

const ProjectDetailsContainer = styled.div`
  display: flex;
  flex: 0 1 55%;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ProjectDescription = styled.p<StyledProps>`
  font-family: 'IBM Plex Mono', monospace;
  height: fit-content;
  font-size: 0.9em;
  background-color: #005f73;
  line-height: 20px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 2px 5px 25px -15px black;
  ${(props) =>
    props.isHovering
      ? 'margin-left: -26%; margin-right: 1%;'
      : 'margin-right: -25%;'}
  z-index: 2;
  transition: margin 0.3s ease-out;
  ${screen.medium`
    margin 0;
    ${(props) =>
      props.isHovering
        ? 'margin-bottom: 0%; margin-right: 0%;'
        : 'margin-bottom: -25%;'}
  `}
`;

const Technologies = styled.ul`
  display: flex;
  flex-flow: column wrap;
  font-family: 'IBM Plex Mono', monospace;
  height: 50px;
  /* flex: 0 1 40px; */
`;

const ProjectPreviewWrapper = styled(ImageWrapper)<StyledProps>`
  /* width: 100%; */
  flex: 0 1 60%;
  max-width: 500px;
  min-width: 30%;
  /* height: 100%; */
  /* border-radius: 55px; */
  ${({ isHovering, isActiveMobile }) =>
    !isHovering && !isActiveMobile && 'filter: grayscale(100%) invert(75%);'}
  transition: 0.5s;
  ${screen.medium`
    ${({ isActiveMobile }) =>
      !isActiveMobile && 'filter: grayscale(100%) invert(75%);'}
  `}
`;

function ProjectListItem({
  subHeader,
  description,
  technologies,
  img,
}: Props): ReactElement {
  const [isHovering, setIsHovering] = useState(false);
  const [isActiveMobile, setIsActiveMobile] = useState(false);

  const freezeFrameRef = useRef(null);

  return (
    <ProjectListItemContainer>
      <ProjectDetailsContainer>
        <SubHeader subHeader={subHeader} fontWeight={600} />
        <ProjectDescription
          isHovering={isHovering}
          isActiveMobile={isActiveMobile}
        >
          {description}
        </ProjectDescription>
        <Technologies>
          {technologies.map((technology, idx) => (
            <li key={idx}>&#8226;{technology}</li>
          ))}
        </Technologies>
      </ProjectDetailsContainer>

      <ProjectPreviewWrapper
        isHovering={isHovering}
        isActiveMobile={isActiveMobile}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* <ProjectPreview src={img} /> */}
        <ReactFreezeFrame
          src={img}
          ref={freezeFrameRef}
          options={{
            // overlay: true,
          }}
          onStart={() => setIsActiveMobile(true)}
          onStop={() => setIsActiveMobile(false)}
        />
      </ProjectPreviewWrapper>
    </ProjectListItemContainer>
  );
}

export default ProjectListItem;
