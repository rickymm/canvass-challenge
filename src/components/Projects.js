import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "../data";

export default function Projects() {
  const [search, setSearch] = useState();
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
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
    } else {
      setFilteredProjects(projects);
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

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
