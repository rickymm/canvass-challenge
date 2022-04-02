import React from "react";
import styled from "styled-components/macro";

export default function ProjectCard({ project }) {
  const { name, createdByUser, createdDate, template, target, inProduction } =
    project;

  return (
    <Card>
      <span>{name}</span>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  border: 1px solid #333;
  max-height: 100px;
  max-width: 370px;
  padding: 10px;
`;
