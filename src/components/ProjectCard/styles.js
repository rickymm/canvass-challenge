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
  max-height: 120px;
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

const TextSize = {
  lg: 16,
  md: 14,
  sm: 12,
};

export const Text = styled.span`
  text-align: start;
  font-size: ${TextSize.md}px;

  ${({ $bold }) =>
    $bold &&
    css`
      font-weight: 600;
    `}

  ${({ $color }) =>
    $color &&
    css`
      color: var(--color-${$color});
    `}

  ${({ $size }) =>
    $size &&
    css`
      font-size: ${TextSize[$size]}px;
    `}
`;

export const Divider = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #33415530;
  margin: 1em 0;
  padding: 0;
`;
