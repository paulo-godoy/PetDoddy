import React from "react";
import { Container } from "react-bootstrap";
import { ContactInfo, Label, Title, ContactWrapper } from "./styles";

function ContactForm() {
  return (
    <ContactWrapper id="contact">
      <Container>
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
    </ContactWrapper>
  );
}

export default ContactForm;
