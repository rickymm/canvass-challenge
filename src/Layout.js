import styled from "styled-components/macro";

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "sidebar navbar "
    "sidebar content";
  grid-template-columns: min-content;
`;

export default Layout;
