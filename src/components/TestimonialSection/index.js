import React from "react";
import { Row } from "react-bootstrap";
import {
  Testimonial,
  TestimonialSectionWrapper,
  TestimonialTitle,
  TestimonialContainer,
  TestimonialText,
  TestimonialAuthor,
  TestimonialCompany,
} from "./styles";

const TestimonialSection = ({ testimonials }) => {
  return (
    <TestimonialSectionWrapper>
      <TestimonialTitle>Depoimentos de clientes</TestimonialTitle>
      <TestimonialContainer>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id}>
            <TestimonialText>"{testimonial.text}"</TestimonialText>
            <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
            <TestimonialCompany>{testimonial.company}</TestimonialCompany>
          </Testimonial>
        ))}
      </TestimonialContainer>
    </TestimonialSectionWrapper>
  );
};

export default TestimonialSection;
