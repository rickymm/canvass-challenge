import React from "react";
import styled from "styled-components/macro";

export default function Projects() {
  return (
    <Wrapper $area="content">
      <Title $area="title">Projects</Title>
      <ProjectsList $area="projects">Display projects here...</ProjectsList>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  grid-area: ${({ $area }) => $area};
  display: grid;
  grid-template-areas:
    "title"
    "projects";
  grid-template-rows: 70px auto;
`;

const Title = styled.h1`
  grid-area: ${({ $area }) => $area};
`;

const ProjectsList = styled.article`
  grid-area: ${({ $area }) => $area};
`;
