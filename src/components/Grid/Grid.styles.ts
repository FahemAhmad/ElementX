import styled from "styled-components";

export const Container = styled.div`
  max-width: ${(props) => props.theme.maxWidth || "1140px"};
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

type ColumnProps = {
  size?: number;
  sizeSm?: number;
  sizeMd?: number;
  sizeLg?: number;
  sizeXl?: number;
};

export const Column = styled.div<ColumnProps>`
  padding-left: 15px;
  padding-right: 15px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${(props) =>
    props.size &&
    `
    flex: 0 0 ${props.size * 8.33}%;
    max-width: ${props.size * 8.33}%;
  `}

  @media (min-width: 576px) {
    ${(props) =>
      props.sizeSm &&
      `
      flex: 0 0 ${props.sizeSm * 8.33}%;
      max-width: ${props.sizeSm * 8.33}%;
    `}
  }

  @media (min-width: 768px) {
    ${(props) =>
      props.sizeMd &&
      `
      flex: 0 0 ${props.sizeMd * 8.33}%;
      max-width: ${props.sizeMd * 8.33}%;
    `}
  }

  @media (min-width: 992px) {
    ${(props) =>
      props.sizeLg &&
      `
      flex: 0 0 ${props.sizeLg * 8.33}%;
      max-width: ${props.sizeLg * 8.33}%;
    `}
  }

  @media (min-width: 1200px) {
    ${(props) =>
      props.sizeXl &&
      `
      flex: 0 0 ${props.sizeXl * 8.33}%;
      max-width: ${props.sizeXl * 8.33}%;
    `}
  }
`;
