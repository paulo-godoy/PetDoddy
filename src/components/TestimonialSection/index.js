import React from "react";
import { Row } from "react-bootstrap";
import {
  TestimonialSectionWrapper,
  TestimonialTitle,
  TestimonialContainer,
  Testimonial,
  TestimonialText,
  TestimonialAuthor,
  TestimonialCompany,
} from "./styles";

const TestimonialSection = ({ testimonials }) => {
  return (
    <TestimonialSectionWrapper id="testimonials">
      <TestimonialTitle>Depoimentos de clientes</TestimonialTitle>
      <TestimonialContainer>
        <Row>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} className="col-md-4">
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
              <TestimonialCompany>{testimonial.company}</TestimonialCompany>
            </Testimonial>
          ))}
        </Row>
      </TestimonialContainer>
    </TestimonialSectionWrapper>
  );
};

export default TestimonialSection;
