import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components/macro";
import { projects as projectsList } from "../data";
import dateFormatter from "../utils/dateFormatter";

import { CARD_WIDTH } from "./ProjectCard/styles";
import ProjectCard from "./ProjectCard";
import SearchInput from "./SearchInput/SearchInput";

function formattedProjects() {
  return projectsList.map((project) => ({
    ...project,
    createdDate: dateFormatter(project.createdDate),
  }));
}

export default function Projects() {
  const projects = useMemo(() => formattedProjects(), [projectsList]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  return (
    <Wrapper $area="content">
      <Title $area="title">Projects</Title>
      <SearchInput
        projects={projects}
        handleUpdateProjects={setFilteredProjects}
      />
      <ProjectsList $area="projects">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsList>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  grid-area: ${({ $area }) => $area};
  display: grid;
  grid-template-areas:
    "title"
    "search"
    "projects";
  grid-template-rows: 70px 30px auto;

  margin: 0 20px;
`;

const Title = styled.h1`
  grid-area: ${({ $area }) => $area};
`;

const ProjectsList = styled.article`
  grid-area: ${({ $area }) => $area};
  margin-top: 15px;
  padding: 20px 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${CARD_WIDTH}px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
