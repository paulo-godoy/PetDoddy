import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

export const TestimonialSectionWrapper = styled.section`
  padding: 80px 0;
  background-color: #f7f7f7;
`;

export const TestimonialTitle = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 50px;
`;

export const TestimonialContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;

export const Testimonial = styled.div`
  flex: 0 0 calc(33.33333% - 30px);
  margin: 15px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-20px);
  }
`;

export const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #999;
  margin-bottom: 30px;
`;

export const TestimonialAuthor = styled.h4`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

export const TestimonialCompany = styled.p`
  color: #999;
  font-size: 1.2rem;
`;
