import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components/macro";
import { projects as projectsList } from "../data";
import dateFormatter from "../utils/dateFormatter";

import { CARD_WIDTH } from "./ProjectCard/styles";
import ProjectCard from "./ProjectCard";
import SearchInput from "./SearchInput/SearchInput";
import device from "../utils/device";

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
    <Wrapper>
      <Title>Projects</Title>
      <SearchInput
        projects={projects}
        handleUpdateProjects={setFilteredProjects}
      />
      <ProjectsList>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsList>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  ${device.desktop} {
    margin: 0 60px;
  }
`;

const Title = styled.h1`
  margin-top: 60px;
  margin-bottom: 40px;
  font-weight: 800;
  font-size: 26px;
`;

const ProjectsList = styled.article`
  margin-top: 15px;
  padding: 20px 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${CARD_WIDTH}px, 1fr));
  grid-column-gap: 50px;
  grid-row-gap: 20px;

  ${device.desktop} {
    grid-row-gap: 50px;
  }
`;
