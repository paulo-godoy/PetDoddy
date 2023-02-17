import styled from "styled-components";
import { Container, ListGroup } from "react-bootstrap";

export const List = styled(ListGroup)`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled(ListGroup.Item)`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const ProductListWrapper = styled(Container)`
  /* margin-top: 80px; */
  padding-top: 100px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;
