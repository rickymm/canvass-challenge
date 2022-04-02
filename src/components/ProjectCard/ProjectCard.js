import React from "react";
import { Text, Card, Row, Divider, TemplateColor } from "./styles";

const Placeholder = () => <Text $color="text-light">--</Text>;

export default function ProjectCard({ project }) {
  const { name, createdByUser, createdDate, template, target, inProduction } =
    project;

  return (
    <Card $border={inProduction}>
      <Row $spaceBetween>
        <Text $size="lg" $bold>
          {name}
        </Text>
        <Text $color={TemplateColor[template]}>
          {template ?? <Placeholder />}
        </Text>
      </Row>
      <Row $mt={5}>
        <Text>
          <Text $bold>Target:</Text> {target ?? <Placeholder />}
        </Text>
      </Row>
      <Divider />
      <Row>
        <Text $color="text-light" $size="sm">
          <b>Created:</b> {createdByUser} - {createdDate}
        </Text>
      </Row>
    </Card>
  );
}
