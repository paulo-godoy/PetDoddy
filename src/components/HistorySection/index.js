import React from "react";
import { Container } from "react-bootstrap";
import { Section, Title, Paragraph } from "./styles";

const HistorySection = ({ title, content }) => {
  return (
    <Section>
      <Container>
        <Title>{title}</Title>
        {content.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </Container>
    </Section>
  );
};

export default HistorySection;
