import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components/macro";
import ProjectCard from "./ProjectCard";
import { CARD_WIDTH } from "./ProjectCard/styles";
import { projects as projectsList } from "../data";
import dateFormatter from "../utils/dateFormatter";

function formattedProjects() {
  return projectsList.map((project) => ({
    ...project,
    createdDate: dateFormatter(project.createdDate),
  }));
}

export default function Projects() {
  const projects = useMemo(() => formattedProjects(), [projectsList]);
  const [search, setSearch] = useState();
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (!search) setFilteredProjects(projects);

    if (search) {
      const newProjects = projects.filter((project) => {
        const hasSomething = Object.values(project).some((value) => {
          if (typeof value === "string") {
            return value.toLocaleLowerCase().startsWith(search.toLowerCase());
          }
          return false;
        });
        return hasSomething;
      });
      setFilteredProjects(newProjects);
    }
  }, [search]);

  return (
    <Wrapper $area="content">
      <Title $area="title">Projects</Title>
      <Search
        $area="search"
        placeholder="Start typing to search..."
        onChange={(e) => setSearch(e.target.value)}
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
`;

const Title = styled.h1`
  grid-area: ${({ $area }) => $area};
`;

const Search = styled.input`
  grid-area: ${({ $area }) => $area};
  margin: 0 20px;
`;

const ProjectsList = styled.article`
  grid-area: ${({ $area }) => $area};
  margin-top: 15px;
  padding: 20px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${CARD_WIDTH}px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
