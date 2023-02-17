import styled from "styled-components";
import { Row } from "react-bootstrap";

export const TestimonialSectionWrapper = styled.section`
  background-color: #f8f9fa;
  padding: 90px 0;
`;

export const TestimonialTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const TestimonialContainer = styled(Row)`
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin: 0 auto;
  max-width: 1200px;
`;

export const Testimonial = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 280px;
  height: 320px;
  margin: 20px;
  padding: 20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const TestimonialText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 20px;
  text-align: justify;
`;

export const TestimonialAuthor = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TestimonialCompany = styled.p`
  font-size: 1rem;
  font-style: italic;
`;
