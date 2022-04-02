import React from "react";
import { Text, Card, Row, Name, Divider, TemplateColor } from "./styles";

const Placeholder = () => <Text $color="text-light">--</Text>;

export default function ProjectCard({ project }) {
  const { name, createdByUser, createdDate, template, target, inProduction } =
    project;

  return (
    <Card $border={inProduction}>
      <Row $spaceBetween>
        <Name>{name}</Name>
        <Text $color={TemplateColor[template]}>
          {template ?? <Placeholder />}
        </Text>
      </Row>
      <Row $mt={10}>
        <Text>
          <b>Target:</b> {target ?? <Placeholder />}
        </Text>
      </Row>
      <Divider />
      <Row>
        <Text $color="text-light" $small>
          <b>Created:</b> {createdByUser} - {createdDate}
        </Text>
      </Row>
    </Card>
  );
}
