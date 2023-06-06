// src/components/Breadcrumbs/Breadcrumbs.styles.ts
import styled from "styled-components";

export const BreadcrumbsWrapper = styled.div`
  display: flex;
`;

export const Crumb = styled.span`
  margin-right: 4px;
  font-size: 14px;

  &:last-child {
    font-weight: bold;
  }

  &::after {
    content: "/";
    margin-left: 4px;
  }
`;
