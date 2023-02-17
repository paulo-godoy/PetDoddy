import React from "react";
import { List, ListItem, ProductListWrapper, Title } from "./styles";

function ProductList({ tasks, type }) {
  const title = type === "products" ? "Produtos" : "Serviços";

  return (
    <ProductListWrapper fluid id={type}>
      <Title>{title}</Title>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            {task.name} - {task.description}
          </ListItem>
        ))}
      </List>
    </ProductListWrapper>
  );
}

export default ProductList;
