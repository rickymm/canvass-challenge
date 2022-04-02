import styled, { css } from "styled-components/macro";
import device from "../../utils/device";

export const CARD_WIDTH = 330;
export const TemplateColor = {
  "Anomaly Detection": "red",
  Forecasting: "blue",
};

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-self: center;
  padding: 20px;
  width: ${CARD_WIDTH - 30}px;
  line-height: 20px;

  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  ${({ $border }) =>
    $border &&
    css`
      border-left: 5px solid var(--color-green);
    `}

  ${device.desktop} {
    width: ${CARD_WIDTH}px;
    max-height: 100px;
    justify-self: baseline;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ $spaceBetween }) =>
    $spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${({ $mt }) =>
    $mt &&
    css`
      margin-top: ${$mt}px;
    `}

  ${device.desktop} {
    flex-direction: row;
  }
`;
export const Name = styled.span`
  font-weight: 600;
`;
export const Text = styled.span`
  font-size: 14px;

  ${({ $color }) =>
    $color &&
    css`
      color: var(--color-${$color});
    `}

  ${({ $small }) =>
    $small &&
    css`
      font-size: 12px;
    `}
`;
export const Divider = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
`;
