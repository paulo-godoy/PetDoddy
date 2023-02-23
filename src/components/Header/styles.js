import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #0d6efd;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 60px;
  margin: 5px;
`;

export const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }

  & > a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #fff;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const Text = styled.h1`
  color: #000;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
