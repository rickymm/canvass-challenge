import styled from "styled-components/macro";

const MARGIN = "8px";

export const Container = styled.div`
  grid-area: ${({ $area }) => $area};

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  min-height: 50px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 8px;
  margin: ${MARGIN} 0;
  margin-left: 6px;

  font-size: 14px;
  color: var(--color-blue);
  background: rgb(56 189 248/0.1);
  border-radius: 4px;

  :first-of-type {
    margin-left: ${MARGIN};
  }
`;

export const Search = styled.input`
  border: none;
  background-color: none;
  margin: ${MARGIN};
  :focus {
    outline: none;
  }
`;

export const Delete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-left: 6px;

  background: none;
  border: none;
  cursor: pointer;

  svg {
    fill: var(--color-blue);
    width: 12px;
    height: 12px;
  }
`;
