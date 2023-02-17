import React from "react";
import { ContactInfo, Label, Title } from "./styles";
import { Container } from "react-bootstrap";

function ContactForm() {
  return (
    <Container className="mt-2">
      <Title>Entre em contato conosco</Title>
      <ContactInfo>
        <Label>Telefone:</Label>
        <span>(11) 1234-5678</span>
      </ContactInfo>
      <ContactInfo>
        <Label>E-mail:</Label>
        <span>contato@petdoddy.com</span>
      </ContactInfo>
      <ContactInfo>
        <Label>Endereço:</Label>
        <span>Rua dos Pets, 123, São Paulo - SP</span>
      </ContactInfo>
    </Container>
  );
}

export default ContactForm;
