import React from "react";
import { List, ListItem } from "./styles";

function ProductList({ tasks, type }) {
  const title = type === "products" ? "Produtos" : "Serviços";

  return (
    <>
      <h3>{title}</h3>
      <List className="list-group">
        {tasks.map((task) => (
          <ListItem className="list-group-item" key={task.id}>
            {task.name} - {task.description}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ProductList;
