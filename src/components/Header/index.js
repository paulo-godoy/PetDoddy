import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { HeaderWrapper, Logo, Text, ContainerLogo } from "./styles";

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderWrapper>
      <Navbar
        bg="light"
        expand="md"
        fixed="top"
        className="justify-content-between"
      >
        <Navbar.Brand href="#home">
          <ContainerLogo>
            <Logo
              src={process.env.PUBLIC_URL + "/images/logo.jpg"}
              alt="Logo do PetDoddy"
            />
            <Text>Pet Doddy</Text>
          </ContainerLogo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => handleScroll("products")}>
              Produtos
            </Nav.Link>
            <Nav.Link onClick={() => handleScroll("services")}>
              Serviços
            </Nav.Link>
            <Nav.Link onClick={() => handleScroll("contact")}>Contato</Nav.Link>
            <Nav.Link onClick={() => handleScroll("history")}>
              Nossa História
            </Nav.Link>
            <Nav.Link onClick={() => handleScroll("testimonials")}>
              Depoimentos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </HeaderWrapper>
  );
};

export default Header;
