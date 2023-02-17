import React from "react";
import { FooterWrapper, FooterContainer, CopyRightText } from "./styles";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContainer>
        <CopyRightText>
          &copy; {currentYear} PetDoddy. Todos os direitos reservados.
        </CopyRightText>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
