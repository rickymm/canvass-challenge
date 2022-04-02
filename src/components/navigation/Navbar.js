import styled from "styled-components/macro";

const NavBar = styled.nav`
  grid-area: navbar;
  display: flex;
  align-items: center;
  list-style: none;
  height: 60px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  padding-left: 20px;

  a {
    cursor: pointer;
    text-decoration: none;
  }

  a:visited {
    color: var(--color-text-base);
  }

  a:not(:last-child) {
    margin: 15px;
  }
`;

export default NavBar;
