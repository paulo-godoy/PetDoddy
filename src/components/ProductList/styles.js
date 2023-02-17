import styled from "styled-components";

// Defina as variáveis ​​de estilo que você precisa
const listBackgroundColor = "#F8F8F8";
const listTextColor = "#000";

// Crie o componente estilizado
export const List = styled.ul`
  background-color: ${listBackgroundColor};
  color: ${listTextColor};
  padding: 1rem;
  border-radius: 4px;
`;

export const ListItem = styled.li`
  padding: 0.5rem;
`;
