import styled from "styled-components/macro";
import device from "./utils/device";

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "navbar"
    "content";
  grid-template-rows: 40px auto;

  ${device.desktop} {
    display: grid;
    grid-template-areas:
      "sidebar navbar "
      "sidebar content";
    grid-template-columns: min-content;
  }
`;

export default Layout;
