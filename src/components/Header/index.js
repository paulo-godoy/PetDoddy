import React from "react";
import { HeaderWrapper, Logo } from "./styles";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <div className="row">
          <div className="col-6">
            <Logo
              src={process.env.PUBLIC_URL + "/images/logo.jpg"}
              alt="Logo do PetDoddy"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-4">Produtos e Serviços</h1>
          </div>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
